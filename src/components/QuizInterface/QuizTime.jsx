import React from "react";
import { MdAccessTime } from "react-icons/md";

function QuizTime({ time }) {
    return (
        <div className="quiz__time inline-flex items-center gap-1">
            <MdAccessTime style={{ display: "inline-block" }} />
            <div className="mt-[0.07rem]">
                <span>{time.minutes.toString().padStart(2, "0")}</span>
                <span>:</span>
                <span> {time.seconds.toString().padStart(2, "0")}</span>
            </div>
        </div>
    );
}

export default QuizTime;
