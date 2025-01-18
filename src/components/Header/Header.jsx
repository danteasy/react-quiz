import React from "react";
import { MdOutlineQuiz } from "react-icons/md";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

function Header({ render }) {
    return (
        <header className=" header mt-4 flex items-center justify-between flex-wrap relative z-10">
            <div className="logo flex gap-4 items-center">
                <MdOutlineQuiz size="1.75rem" />
                <h1 className="text-3xl font-semibold">React Quiz</h1>
            </div>
            <div className="flex gap-4 items-center">
                {render && render()}
                <ThemeSwitcher />
            </div>
        </header>
    );
}

export default Header;
