import { createContext, useLayoutEffect } from "react";
import { EndlessSpring,  isDarkMode,  Shade } from "./themes";

export const ThemeContext = createContext(undefined)

const ProvideThemeContext = (props) => {
    const toggleDarkMode = () => localStorage.setItem("isDark", isDarkMode() ? "1": "0")
    
    const themeContext = {
        theme: EndlessSpring,
        toggleDarkMode: toggleDarkMode
    }

    useLayoutEffect(() => {
        
        document.documentElement.style.backgroundColor = themeContext.theme.pallete(isDarkMode() ? Shade.Dark : Shade.LightSurface)
        document.documentElement.style.color = themeContext.theme.pallete(isDarkMode() ? Shade.LightSurface : Shade.Dark)
        document.documentElement.style.fontFamily = themeContext.theme.typography.fontFamily;
        document.documentElement.style.fontSize = themeContext.theme.typography.fontSize[16];
        // Limpiar el efecto al desmontar el componente si es necesario
        return () => {
            document.documentElement.style.backgroundColor = "";
          };
    }, [])
    return <ThemeContext.Provider value={themeContext}>{props.children}</ThemeContext.Provider>
}
export default ProvideThemeContext;