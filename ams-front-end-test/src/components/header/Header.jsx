import { useContext } from "react";
import { ThemeContext } from "../../store/context/theme/main";
import styles from './Header.module.css'
import { isDarkMode, Shade } from "../../store/context/theme/themes";
import Logo from "../logo/Logo";
import Breadcrums from "../breadcrums/Breadcrums";
import { CartLogo } from "../cart/cartlogo/CartLogo";





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

      
      <Logo/>
      <Breadcrums/>
      <CartLogo/>
        {/* <ColorMode/> */}
    </div>
    </>
  );
};

export default Header;
