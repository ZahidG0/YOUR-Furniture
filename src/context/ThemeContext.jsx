import { createContext, useEffect, useState } from "react";

export const themeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    useEffect(() => {
        if(isDarkMode) {
            document.body.classList.add('dark')
        }else {
            document.body.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <themeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )

}
