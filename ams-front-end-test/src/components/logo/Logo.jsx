import React from 'react'
import logo from '../../assets/header_icon.jpg'
import styles from './Logo.module.css'
const Logo = () => {
  return (
    
    <img className={styles.logo} src={logo}  alt="logo-alt-img" />
  )
}

export default Logo