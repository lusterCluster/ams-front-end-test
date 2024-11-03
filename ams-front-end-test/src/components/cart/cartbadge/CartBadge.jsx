import React, { useContext } from 'react'
import styles from './CartBadge.module.css'
import { Shade } from '../../../store/context/theme/themes'
import { ThemeContext } from '../../../store/context/theme/main'
const CartBadge = () => {
    const context = useContext(ThemeContext)
  return (
    <div style={{background: context.theme.pallete(context.isDarkMode() ? Shade.LightSurface : Shade.Dark),
        color: context.theme.pallete(context.isDarkMode() ? Shade.Dark : Shade.LightSurface)
     }}  className={styles.cartBadge} > 1 </div>
  )
}

export default CartBadge