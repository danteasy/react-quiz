import React from "react";
import { MdOutlineSportsScore } from "react-icons/md";
import { LuTimer } from "react-icons/lu";

function ResultsScore({
    questionsLength,
    quizTime,
    userScore,
    className = "",
    childClassName = "",
}) {
    return (
        <div
            className={`text-[1.25rem] py-1 px-2 rounded-[15px] results__score ${className}`}
        >
            <div className={`flex gap-2  items-center ${childClassName}`}>
                <MdOutlineSportsScore />
                <span>{`${userScore}/${questionsLength}`}</span>
            </div>
            <div className={`flex gap-2  items-center ${childClassName}`}>
                <LuTimer />
                <span>{`${quizTime.minutes} min ${quizTime.seconds} sec`}</span>
            </div>
        </div>
    );
}

export default ResultsScore;
