import React from "react";
import styles from "./Footer.module.css";
import {getImageUrl} from "../../../utils.js";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <img className={styles.img} src={getImageUrl("nav/logo.png")} alt="logo"/>
            <p className={styles.description}>Strona stworzona przez fanów dla fanów. Wiedźmin: Stary Świat to przygoda, którą dzielimy razem</p>
            <p className={styles.copyright}>&copy; {year} OldWorld Codex. Fanowski projekt niezwiązany z CD Projekt RED ani Go on Board.</p>
            <div className={styles.backgroungd}></div>
        </footer>
    );
};