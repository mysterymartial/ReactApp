import React from 'react'
import style from "../styles/SideBar.module.css";


const SideBar = () => {
  return (
    <div className={style.container}>
      <button className={style.button}><p>Popular</p></button>
      <button className={style.button}><p>Upcoming</p></button>
      <button className={style.button}>Now Playing</button>
      <button className={style.button}><p>Top Rated</p></button>
      
    </div>
  )
}

export default SideBar
