// DarkModeContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context for dark mode
const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(null);

    // Load dark mode state from localStorage when component mounts
    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        setIsDarkMode(savedDarkMode === "true");
    }, []);

    // Toggle dark mode and save the state in localStorage
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("darkMode", newMode);
            return newMode;
        });
    };

    if (isDarkMode === null) return null;

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </DarkModeContext.Provider>
    );
};

// Custom hook for using dark mode context
export const useDarkMode = () => useContext(DarkModeContext);
