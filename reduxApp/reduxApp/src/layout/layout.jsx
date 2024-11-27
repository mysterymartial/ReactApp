import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SideBar from "../component/SideBar";
import style from "../styles/layout.module.css"
import { MovieApi } from "../service/movieApi";


const Layout = () => {
  return (
    <>
        <Header/> 
        <div className={style.outletContainer}>
            <SideBar/>
            <Outlet/>
        </div>
        
        <Footer/>      
    </>
  )
}


export default Layout

