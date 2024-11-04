import { useContext, useState } from "react";
import { ThemeContext } from "../../../store/context/theme/main";
import { Shade } from "../../../store/context/theme/themes";
import styles from "./ColorMode.module.css"

const ColorMode = () => {
  const context = useContext(ThemeContext);
  const [icon, setIcon] = useState(() =>
    context.isDarkMode() ? "dark_mode" : "light_mode"
  );
  const handleMouseEnter = () => {
    document.getElementById("dark-mode-button").style.backgroundColor =
      context.theme.pallete(context.isDarkMode() ? Shade.Surface : Shade.Dark);
  };
  const handleMouseLeave = () => {
    document.getElementById("dark-mode-button").style.backgroundColor =
      context.theme.pallete(
        context.isDarkMode() ? Shade.Dark : Shade.Surface
      );
  };
  const handleToggle = () => {
    setIcon(context.isDarkMode() ? "dark_mode" : "light_mode");
    context.toggleDarkMode();
  };

  return (
    <button
      id="dark-mode-button"
      className={styles.button}
      style={{        
        background: context.theme.pallete(context.isDarkMode() ? Shade.Dark: Shade.Surface),
      }}
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="material-symbols-outlined"
        style={{
          fontSize: "21px",
          color: context.theme.pallete(Shade.LightSurface),
        }}
      >
        {icon}
      </span>
    </button>
  );
};
export default ColorMode;
