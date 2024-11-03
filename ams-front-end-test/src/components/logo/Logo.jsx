import React, { useContext } from "react";
import styles from "./Logo.module.css";
import { ThemeContext } from "../../store/context/theme/main";
import { Shade } from "../../store/context/theme/themes";
import { Link } from "react-router-dom";
const Logo = () => {
  const context = useContext(ThemeContext);
  return (
    <Link className={styles.logo} >
    <svg
      fill={context.theme.pallete(context.isDarkMode() ? Shade.Focus : Shade.Surface)}
      height="2rem"
      width="2rem"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.442 27.442"
    >
      <g>
        <path
          d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
		c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
		s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
		c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
		 M19.995,21.1H7.448V3.373h12.547V21.1z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </g>
    </svg>
    <p style={{color: context.theme.pallete(context.isDarkMode() ? Shade.Focus : Shade.Surface)}} >Smart Phone Store</p>
    </Link>
  );
};

export default Logo;


