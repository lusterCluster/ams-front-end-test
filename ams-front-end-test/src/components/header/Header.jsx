import { useContext } from "react";
import { ThemeContext } from "../../store/context/theme/main";
import styles from './Header.module.css'
import { isDarkMode, Shade } from "../../store/context/theme/themes";
import logo from '../../assets/header_icon.jpg'



const Header = () => {
    
  return (
    <>
    <div
      className={styles.header}
      style={{
        background: useContext(ThemeContext).
          theme.pallete(
            isDarkMode() 
            ? Shade.LightSurface 
            : Shade.Surface),
      }}
    >

      
        <img className={styles.logo} src={logo}  alt="logo-alt-img" />
      
        {/* <ColorMode/> */}
    </div>
    </>
  );
};

export default Header;
