import React from "react";
import styles from "./Styles.module.css";
import Header from "../components/header/Header";
const Desktop = () => {
  return (
    <>
      <div className={styles.desktop + " " + styles.robotoRegular}>
        <div style={{ width: "100%", background: "white", marginTop: "100px" }}>
          <input type="text" />
        </div>
        <Header />
      </div>
    </>
  );
};

export default Desktop;
