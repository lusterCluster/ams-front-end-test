import React, { useContext } from 'react'
import styles from './Card.module.css'
import { ThemeContext } from '../../store/context/theme/main'
import { Shade } from '../../store/context/theme/themes'
const Card = ({imgUrl, head, details}) => {
    const context = useContext(ThemeContext)
  return (
    <div style={{background: context.theme.pallete(context.isDarkMode() ? Shade.SecondaryDark : Shade.Focus), color: context.theme.pallete(context.isDarkMode() ? Shade.LightSurface : Shade.Dark)}} className={styles.card}>
         <div className={styles.imgContainer}>

        <img className={styles.image} src={imgUrl} alt="image_alt" />
        </div>
             <div className={styles.head} > {head} </div>
        {details.map((item, i)=> (
            <>
            <div  className={styles.subhead} key={"item-detail-"+i} > {item} </div>
            </>
        )) }
    </div>
  )
}

export default Card