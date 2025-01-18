import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { useStore } from "./store.js";

import ThemeContextProvider from "./context/ThemeContext.jsx";

import Main from "./pages/Main.jsx";
import Quiz from "./pages/Quiz.jsx";
import NotFound from "./pages/NotFound.jsx";
import Results from "./pages/Results.jsx";

import Container from "./components/Container/Container.jsx";

function App() {
    const setToken = useStore(state => state.setToken);

    useEffect(() => {
        setToken();
    }, []);

    return (
        <>
            <ThemeContextProvider>
                <Router>
                    <Container>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/quiz" element={<Quiz />} />
                            <Route path="/quiz" element={<Quiz />} />
                            <Route path="/results" element={<Results />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Container>
                </Router>
            </ThemeContextProvider>
        </>
    );
}

export default App;
