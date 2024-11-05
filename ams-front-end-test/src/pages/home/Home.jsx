import React, { useContext } from "react";
import LottieAnimation from "../../components/lottie/LottieAnimation";
import styles from "./Home.module.css";
import { ThemeContext } from "../../store/context/theme/main";
import { Shade } from "../../store/context/theme/themes";
import { Link } from "react-router-dom";
const Home = () => {
  const context = useContext(ThemeContext);
  const handleMouseEnter = () => {
    document.getElementById("home-button").style.backgroundColor =
      context.theme.pallete(context.isDarkMode() ? Shade.Surface : Shade.Dark);
  };
  const handleMouseLeave = () => {
    document.getElementById("home-button").style.backgroundColor =
      context.theme.pallete(context.isDarkMode() ? Shade.SecondaryDark : Shade.Surface);
  };
  return (
    
    <div className={styles.container}>
      <LottieAnimation />
      <h1 className={styles.head}> Samart Phone Store </h1>
      <button
        id="home-button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          background: context.theme.pallete(
            context.isDarkMode() ? Shade.SecondaryDark : Shade.Surface
          ),
        }}
        className={styles.button}
      >
        <Link className={styles.link} to={"/product-list"}>
        
        Ir a la Tienda
        </Link>
      </button>
    </div>
  );
};

export default Home;
