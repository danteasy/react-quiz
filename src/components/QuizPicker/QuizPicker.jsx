import React, { useEffect } from "react";

import { transformCategories } from "../../utils";
import { useStore } from "../../store";
import { useQuiz } from "../../store";

import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Select from "../Select/Select";

const quizAmount = [5, 10, 15, 20, 25].map(i => ({
    value: i,
    label: i.toString(),
}));

function QuizPicker({ className, ...props }) {
    const setQuizCategories = useStore(state => state.setCategories);
    const quizCategories = useStore(state => state.categories);
    const setChosenCategory = useStore(state => state.setChosenCategory);
    const choosenAmount = useStore(state => state.quizAmount);
    const setQuizAmount = useStore(state => state.setQuizAmount);
    const chosenCategory = useStore(state => state.chosenCategory);

    const fetchQuestions = useQuiz(state => state.fetchQuestions);

    const navigate = useNavigate();

    useEffect(() => {
        setQuizCategories();
    }, []);

    return (
        <div className={`mt-7 ${className}`} {...props}>
            {(quizCategories.length && (
                <Select
                    options={transformCategories(quizCategories)}
                    value={chosenCategory}
                    onChange={e => setChosenCategory(e.target.value)}
                />
            )) ||
                "Loading categories..."}
            {chosenCategory && (
                <div>
                    <div className="mt-4">
                        <div className="mb-2">Amount of questions:</div>
                        <Select
                            className="mt-2"
                            options={quizAmount}
                            value={choosenAmount}
                            onChange={e => setQuizAmount(e.target.value)}
                        />
                        <Button
                            type="btn"
                            to={async () => {
                                await fetchQuestions();
                                navigate("/quiz");
                            }}
                            className="ml-2"
                            parentDisplay="block"
                        >
                            Start
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuizPicker;
