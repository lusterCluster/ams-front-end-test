import React from "react";
import styles from './CartLogo.module.css'
import CartBadge from "../cartbadge/CartBadge";
export const CartLogo = () => {
  return (
    <>
    <div className={styles.container} >

      <span className={styles.cartLogo + " " + "material-symbols-outlined"}>shopping_cart</span>
      <CartBadge/>
    </div>
    </>
  );
};
