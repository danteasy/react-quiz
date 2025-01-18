import React from "react";

import { useQuiz } from "../store";

import ResultsScore from "../components/Results/ResultsScore";

import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import ResultsList from "../components/Results/ResultsList";
import QuizPicker from "../components/QuizPicker/QuizPicker";
import HomeButton from "../components/HomeButton";

function Results() {
    const { questions, quizTime } = useQuiz(state => ({
        questions: state.questions,
        quizTime: state.quizTime,
    }));
    const userScore = questions.filter(
        q => q.userAnswer === q["correct_answer"]
    ).length;

    return (
        <>
            <div className="mt-4 pb-12">
                <div className="flex justify-between items-center">
                    <HomeButton />
                    <ThemeSwitcher parentClass="ml-auto" />
                </div>
                {questions.length ? (
                    <>
                        <div className="flex  justify-between mt-12 flex-wrap">
                            <h1 className="inline-block text-3xl mb-4">
                                Results of the quiz
                            </h1>
                            <ResultsScore
                                quizTime={quizTime}
                                questionsLength={questions.length}
                                userScore={userScore}
                            />
                        </div>
                        <ResultsList questions={questions} />
                        <ResultsScore
                            quizTime={quizTime}
                            questionsLength={questions.length}
                            userScore={userScore}
                            className="mt-8"
                            childClassName="justify-center"
                        />
                    </>
                ) : null}
                <div className="mt-12 text-center">
                    <span className="text-[1.75rem]">Take another quiz</span>
                    <QuizPicker />
                </div>
            </div>
        </>
    );
}

export default Results;
