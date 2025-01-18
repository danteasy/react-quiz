import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { generateRandomNumber, escapeHtml } from "./utils";

import QUIZ_API from "./api";

export const useStore = create(
    devtools((set, get) => ({
        error: "",
        sessionToken: null,
        chosenCategory: undefined,
        categories: [],
        quizAmount: 10,
        setToken: async () => {
            try {
                const token = await QUIZ_API.generateSessionToken();
                set({ sessionToken: token });
            } catch (err) {
                set({ error: err.message });
            }
        },
        setCategories: async () => {
            try {
                const categories = await QUIZ_API.getQuizCategories();
                set({ categories: categories });
            } catch (err) {
                set({ error: err.message });
            }
        },
        setChosenCategory: category => set({ chosenCategory: category }),
        setQuizAmount: amount => set({ quizAmount: amount }),
    }))
);

export const useQuiz = create(
    devtools((set, get) => ({
        currentQuestion: 0,
        error: "",
        quizTime: 0,
        isLoading: false,
        questions: [],
        isFinished: false,
        handleUserAnswer: answer =>
            set(state => {
                const current = state.currentQuestion;
                const updatedQuestion = {
                    ...state.questions[current],
                    userAnswer: answer,
                };
                const updatedQuestions = [
                    ...state.questions.slice(0, current),
                    updatedQuestion,
                    ...state.questions.slice(
                        current + 1,
                        state.questions.length
                    ),
                ];
                return { questions: updatedQuestions };
            }),
        nextQuestion: () =>
            set(state => {
                if (state.currentQuestion + 1 === state.questions.length) {
                    return { isFinished: true };
                } else {
                    return { currentQuestion: state.currentQuestion + 1 };
                }
            }),
        prevQuestion: () => {
            if (!get().currentQuestion) return;
            set({ currentQuestion: get().currentQuestion - 1 });
        },

        finishQuiz: time =>
            set({ isFinished: true, quizTime: time, currentQuestion: 0 }),
        fetchQuestions: async () => {
            try {
                const { chosenCategory, quizAmount } = useStore.getState();

                set({ isLoading: true });

                const questions = await QUIZ_API.fetchQuestions(
                    chosenCategory,
                    quizAmount
                );

                const transformedQuestions = questions.map(question => {
                    const incorrectAnswers = question["incorrect_answers"];
                    const randomPosition = generateRandomNumber(
                        0,
                        incorrectAnswers.length
                    );
                    const answers = incorrectAnswers
                        .toSpliced(
                            randomPosition,
                            0,
                            question["correct_answer"]
                        )
                        .map(i => escapeHtml(i));

                    return {
                        ...question,
                        question: escapeHtml(question.question),
                        answers: answers,
                        userAnswer: undefined,
                    };
                });

                set({ questions: transformedQuestions });
            } catch (err) {
                set({ error: err.message });
            } finally {
                set({ isLoading: false });
            }
        },
    }))
);
