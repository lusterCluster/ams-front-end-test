import React, { useContext, useEffect, useState } from 'react';
import styles from './CartBadge.module.css';
import { Shade } from '../../../store/context/theme/themes';
import { ThemeContext } from '../../../store/context/theme/main';

const CartBadge = () => {
    const context = useContext(ThemeContext);    
    const [count, setCount] = useState(localStorage.getItem("cartItemCount") ?? 0);
    
    useEffect(() => {
        // Function to update count from localStorage
        const updateCount = () => {
            setCount(localStorage.getItem("cartItemCount") || 0);
        };

        // Listen for 'storage' event to handle changes from other tabs
        window.addEventListener("storage", updateCount);

        // Custom event listener for same-tab changes
        const interval = setInterval(() => {
            updateCount();
        }, 500);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener("storage", updateCount);
            clearInterval(interval);
        };
    }, []);
    if(count === 0) {
      return (
        <></>
      )
    }
    return (
        <div
            style={{
                background: context.theme.pallete(context.isDarkMode() ? Shade.LightSurface : Shade.Dark),
                color: context.theme.pallete(context.isDarkMode() ? Shade.Dark : Shade.LightSurface)
            }}
            className={styles.cartBadge}
        >
            {count}
        </div>
    );
};

export default CartBadge;
