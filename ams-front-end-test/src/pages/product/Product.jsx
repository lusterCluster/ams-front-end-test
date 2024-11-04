import React, { useContext } from "react";
import styles from "./Product.module.css";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../store/context/theme/main";
import { Shade } from "../../store/context/theme/themes";
const Product = () => {
  const location = useLocation();
  const themeContext = useContext(ThemeContext)
  return (
    <>
      <div className={styles.gridContainer}>
        <img
          className={styles.productImage}
          src={location.state.imgUrl}
          alt=""
        />
      <div className={styles.detailsContainer}>
        
        <section style={{
          background: themeContext.theme.pallete(themeContext.isDarkMode() ? Shade.SecondaryDark : Shade.Hover)

        }}  className={styles.details}>
          <p>{location.state.brand}</p>  
          <p>{location.state.model}</p>  
          <p>{location.state.price}</p>  
        </section>
        <section className={styles.actions}>

        </section>
      </div>
      </div>
    </>
  );
};

export default Product;
