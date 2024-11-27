import React from 'react'
import style from "../styles/Header.module.css";
const Header = () => {
  return (
    
      <div className={style.container}>
        <p className={style.logo}>MyLords</p>
        <input className={style.searchBar} type="text"  placeholder= 'serach'/>

      
    </div>
  )
}

export default Header
