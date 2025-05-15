import React, {useState} from "react";

import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils.js";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoTitle}>
                <img className={styles.logoImg} src={getImageUrl("nav/logo.png")} alt="logo"/>
                <a className={styles.title} href="/">OldWorld Codex</a>
            </div>
        <div className={styles.menu}>
            <img className={styles.menuBtn}
                 src={
                    menuOpen
                        ? getImageUrl("nav/closemenuIcon.png")
                        : getImageUrl("nav/menuIcon.png")}
                        alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}/>

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>

                <li><a href="#knowlage">Instrukcja</a> </li>
                <li><a href="#bestiary">Bestiariusz</a> </li>
                <li><a href="#contact">Kontakt</a> </li>
                <li><a href="#register">Rejestracja</a> </li>
                <li><a href="#login">Logowanie</a> </li>
            </ul>
        </div>
    </nav>
)};