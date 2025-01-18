import React, { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import Button from "../Button/Button";

function ThemeSwitcher({ className = "", ...props }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const themeWord = theme === "light" ? "Dark" : "Light";
    const iconSize = "1.5rem";

    return (
        <Button
            to={toggleTheme}
            type="btn"
            className={`font-bold ${className}`}
            {...props}
        >
            {themeWord === "Dark" ? (
                <MdOutlineDarkMode size={iconSize} />
            ) : (
                <MdOutlineLightMode size={iconSize} />
            )}
            <span>{themeWord}</span>
        </Button>
    );
}

export default ThemeSwitcher;
