import React from 'react'
import style from './Breadcrums.module.css'
import { NAVIGATION } from '../../store/navigation/navigation'
import {Link} from 'react-router-dom'
const Breadcrums = () => {
  return (
    <div className={style.container}>
      {NAVIGATION.map((item, i) => (
        
          <Link className={style.link} key={i} to={item.path} >
          <div key={"breadcrum-"+i} className={style.breadcrums} > {item.label}  </div>
          </Link>
      
      ))}        
    </div>
  )
}

export default Breadcrums