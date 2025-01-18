import React from "react";

import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import QuizInterface from "../components/QuizInterface/QuizInterface";
import Preloader from "../components/Preloader/Preloader";

import HomeButton from "../components/HomeButton";

import { useQuiz } from "../store";

function Quiz() {
    const isLoading = useQuiz(state => state.isLoading);

    return (
        <section className="mt-4">
            <div className="flex justify-between items-center">
                <HomeButton />
                <ThemeSwitcher parentClass="block ml-auto" />
            </div>
            {(isLoading && <Preloader />) || <QuizInterface />}
        </section>
    );
}

export default Quiz;
