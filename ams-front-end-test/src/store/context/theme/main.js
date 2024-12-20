import { createContext, useLayoutEffect } from "react";
import { AtunumEmber,   Shade } from "./themes";
import useLocalStorage from "../../../hooks/useLocalStorage";

export const ThemeContext = createContext(undefined)

const ProvideThemeContext = (props) => {
    const {value, setValue} = useLocalStorage("isDark", "0")
    const toggleDarkMode = () => {
        setValue(() => {
            if (value === "0") {
                return "1"
            }
            else return "0"
        })}        
    const isDarkMode = () => {
        if(value === "0") {
            return true
        }   
        else return false
    }
    const themeContext = {
        isDarkMode: isDarkMode,
        theme: AtunumEmber,
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
    }, [value])
    return <ThemeContext.Provider value={themeContext}>{props.children}</ThemeContext.Provider>
}
export default ProvideThemeContext;