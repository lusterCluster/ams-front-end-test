import React from 'react'
import styles from './Styles.module.css'
import AppBar from '../components/Appbar/AppBar'
const Desktop = () => {
  return (
    <>
    <div className={styles.desktop + " " + styles.robotoRegular} >
    <div style={{width: "100%", background: "white", marginTop: "100px"}}>
    <input type='text'/>
    </div>
    <AppBar/>
    </div>
    </>

  )
}

export default Desktop