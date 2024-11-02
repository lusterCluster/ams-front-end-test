import { useContext } from "react";
import { ThemeContext } from "../../store/context/theme/main";
import styles from './Header.module.css'
import { Shade } from "../../store/context/theme/themes";
import Logo from "../logo/Logo";
import Breadcrums from "../breadcrums/Breadcrums";
import { CartLogo } from "../cart/cartlogo/CartLogo";





const Header = () => {
    const context = useContext(ThemeContext)
  return (
    <>
    <div
      className={styles.header}
      style={{
        background: context.
          theme.pallete(
            context.isDarkMode() 
            ? Shade.Surface 
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
