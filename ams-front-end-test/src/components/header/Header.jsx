import { useContext } from "react";
import { ThemeContext } from "../../store/context/theme/main";
import styles from './Header.module.css'
import { Shade } from "../../store/context/theme/themes";
import Logo from "../logo/Logo";
import Breadcrums from "../breadcrums/Breadcrums";
import { CartLogo } from "../cart/cartlogo/CartLogo";
import ColorMode from "../buttons/colormode/ColorMode";





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
            ? Shade.SecondaryDark 
            : Shade.Surface),
      }}
    >

      
      <Logo/>
      <Breadcrums/>
      <div>
     <div className={styles.itemContainer} >

        <ColorMode/>
      <CartLogo/>
     </div>
      </div>
    </div>
    </>
  );
};

export default Header;
