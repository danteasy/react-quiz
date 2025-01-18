import React from "react";

import Header from "../components/Header/Header";

import QuizPicker from "../components/QuizPicker/QuizPicker";

import { MdOutlineQuestionMark } from "react-icons/md";

function Main() {
    return (
        <section>
            <Header />
            <div className="relative z-10 mt-[25vh] max-w-[600px] text-center mx-auto text-lg">
                <p>
                    React Quiz is an interactive website designed to test your
                    knowledge on various topics. With a user-friendly interface,
                    you can choose a topic of interest and embark on a quiz
                    journey. Each quiz consists of 15-20 questions, carefully
                    crafted to challenge your understanding of the chosen
                    subject.
                </p>
                <MdOutlineQuestionMark className="main__background-icon" />
                <MdOutlineQuestionMark className="main__background-icon" />
            </div>
            <QuizPicker className="text-center" />
        </section>
    );
}

export default Main;
