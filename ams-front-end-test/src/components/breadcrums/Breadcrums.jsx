import React from 'react'
import style from './Breadcrums.module.css'
const Breadcrums = () => {
  return (
    <div className={style.container}>
        <div className={style.breadcrums} > Phones  </div>
        <div className={style.breadcrums} > Home  </div>
    </div>
  )
}

export default Breadcrums