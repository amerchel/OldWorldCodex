import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, href, onClick, type = "button" }) => {
    const isLink = !!href;

    if (isLink) {
        return (
            <a href={href} className={styles.button}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
};
