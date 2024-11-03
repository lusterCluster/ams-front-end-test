import React from "react";
import styles from "./Styles.module.css";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
const Desktop = () => {
  return (
    <>
      <div className={styles.desktop + " " + styles.robotoRegular}>
        <div style={{ width: "100%", background: "white", marginTop: "100px" }}>          
        </div>
        <Header />
        <Outlet/>
      </div>
    </>
  );
};

export default Desktop;
