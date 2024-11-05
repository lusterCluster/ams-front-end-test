import React, { useContext } from "react";
import styles from './CartLogo.module.css'
import CartBadge from "../cartbadge/CartBadge";
import { Shade } from "../../../store/context/theme/themes";
import { ThemeContext } from "../../../store/context/theme/main";
export const CartLogo = () => {
    const context = useContext(ThemeContext)
  return (
    <>
    <div  className={styles.container} >

      <span style={{background: context.theme.pallete(context.isDarkMode() ? Shade.Dark : Shade.LightSurface), color: context.theme.pallete(context.isDarkMode() ? Shade.LightSurface : Shade.Dark)}}  className={styles.cartLogo + " " + "material-symbols-outlined"}>shopping_cart</span>      
      <CartBadge/>      
    </div>
    </>
  );
};
