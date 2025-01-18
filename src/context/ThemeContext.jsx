import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("color-theme");
        if (savedTheme) setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.body.setAttribute("color-theme", theme);
        localStorage.setItem("color-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        const themeToToggle = theme === "light" ? "dark" : "light";
        setTheme(themeToToggle);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
