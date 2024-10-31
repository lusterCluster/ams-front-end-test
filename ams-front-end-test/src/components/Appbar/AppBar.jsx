import { useContext } from "react";
import { ThemeContext } from "../../store/context/theme/main";
import styles from './Appbar.module.css'
import { isDarkMode, Shade } from "../../store/context/theme/themes";



const AppBar = () => {
  const context = useContext(ThemeContext);
  console.log(context.theme.pallete(isDarkMode() ? Shade.Dark : Shade.LightSurface))

  return (
    <>
    <div
      className={styles.appbar}
      style={{
        background: context.theme.pallete(isDarkMode() ? Shade.LightSurface : Shade.Surface),
      }}
    >

      <section style={{ gridColumnStart: 3, display: "flex", justifyContent: "end", paddingRight:"150px" }}>
        {/* <ColorMode/> */}lol
      </section>
    </div>
    </>
  );
};

export default AppBar;
