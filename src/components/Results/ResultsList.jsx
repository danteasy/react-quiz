import React from "react";

function ResultsList({ questions }) {
    const listClassname = "answers-list__item p-3 rounded-[15px] ";

    const renderListClasslist = (question, answer) => {
        const clazzname =
            answer === question["correct_answer"]
                ? "answer_correct"
                : answer === question.userAnswer &&
                  answer !== question["correct_answer"]
                ? "answer_incorrect"
                : "";
        return listClassname + clazzname;
    };
    return (
        <>
            {questions.map((question, idx) => {
                const spanKey = "span" + idx++;
                return (
                    <div className="mt-8" key={idx}>
                        <span key={spanKey} className="text-[1.25rem]">
                            {question.question}
                        </span>
                        <ul
                            key={question}
                            className="quiz__answers-list flex flex-col gap-2 mx-auto my-3"
                        >
                            {question.answers.map((answer, i) => {
                                return (
                                    <li
                                        key={answer}
                                        className={renderListClasslist(
                                            question,
                                            answer
                                        )}
                                    >
                                        {answer}
                                        {answer === question.userAnswer && (
                                            <span
                                                key={i}
                                                className="text-black ml-4 font-[500]"
                                            >
                                                - Yours
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </>
    );
}

export default ResultsList;
