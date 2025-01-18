import React, { useState, useEffect, useRef } from "react";
import Button from "../Button/Button";
import { useQuiz } from "../../store";
import QuizTime from "./QuizTime";
import AnswersList from "./AnswersList";
import QuizPicker from "../QuizPicker/QuizPicker";

function QuizInterface() {
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });

    const currentQuestion = useQuiz(state => state.currentQuestion);
    const prevQuestion = useQuiz(state => state.prevQuestion);
    const nextQuestion = useQuiz(state => state.nextQuestion);
    const finishQuiz = useQuiz(state => state.finishQuiz);
    const questions = useQuiz(state => state.questions);
    const handleUserAnswer = useQuiz(state => state.handleUserAnswer);

    const isQuestionTheLast = currentQuestion + 1 === questions.length;

    const question = questions[currentQuestion];

    const intervalRef = useRef();

    const timeRef = useRef({ ...time });

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (time.seconds === 59) {
                setTime(prev => ({ minutes: prev.minutes + 1, seconds: 0 }));
            } else {
                setTime(prev => ({
                    minutes: prev.minutes,
                    seconds: prev.seconds + 1,
                }));
            }
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
            timeRef.current = { ...time };
        };
    }, [time.seconds]);

    useEffect(() => {
        return () => finishQuiz(timeRef.current);
    }, []);

    const renderNextButton = () => {
        if (isQuestionTheLast) {
            if (!question.userAnswer) {
                return (
                    <Button type="btn" to={() => {}} className="btn--disabled">
                        Finish!
                    </Button>
                );
            } else {
                return (
                    <Button type="router-link" to="/results">
                        Finish!
                    </Button>
                );
            }
        } else if (question.userAnswer) {
            return (
                <Button type="btn" to={nextQuestion}>
                    Next
                </Button>
            );
        } else {
            return (
                <Button type="btn" className="btn--disabled">
                    Next
                </Button>
            );
        }
    };
    return (
        <div className="quiz mt-[15vh]">
            {questions.length ? (
                <>
                    <h1 className="text-3xl mt-8 text-2xl">
                        {question.question}
                    </h1>
                    <AnswersList
                        answers={question.answers}
                        handleUserAnswer={handleUserAnswer}
                        userAnswer={question.userAnswer}
                    />
                    <div className="flex justify-between items-center">
                        <div className="quiz__progress rounded-[15px] py-1 px-2 inline-flex items-center">
                            <span className="mr-6">{`${currentQuestion + 1}/${
                                questions.length
                            }`}</span>
                            <QuizTime time={time} />
                        </div>
                        <div>
                            <Button
                                type="btn"
                                to={prevQuestion}
                                className={`mr-2 ${
                                    !currentQuestion ? "btn--disabled" : ""
                                }`}
                            >
                                Previous
                            </Button>

                            {renderNextButton()}
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center mt-8">
                    <span className="text-2xl">You haven't started quiz.</span>
                    <QuizPicker />
                </div>
            )}
        </div>
    );
}

export default QuizInterface;
