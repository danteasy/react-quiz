import React from "react";

function AnswersList({ answers, handleUserAnswer, userAnswer }) {
    return (
        <ul className="quiz__answers-list flex flex-col gap-2 mx-auto my-6">
            {answers.map(answer => {
                return (
                    <li
                        className={`answers-list__item quiz p-3 rounded-[15px] cursor-pointer ${
                            answer === userAnswer ? "chosen" : ""
                        }`}
                        key={answer}
                        onClick={e => handleUserAnswer(e.target.innerText)}
                    >
                        {answer}
                    </li>
                );
            })}
        </ul>
    );
}

export default AnswersList;
