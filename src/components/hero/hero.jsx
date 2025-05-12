import React from 'react';

import styles from "./hero.module.css"
import { getImageUrl } from "../../utils.js";

export const Hero = () => {
    return (
        <section className={styles.container}>

            <div className={styles.content}>
                    <h1 className={styles.title}>Witamy w OldWorld Codex!</h1>
                    <p className={styles.description}>Ta strona została stworzona z myślą o fanach gry planszowej "Wiedźmin Stary Świat",
                    którzy poszukują przydatnych zasobów i informacji przydatnych podczas rozgrywki.</p>
            </div>

            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero"/>

        </section>
    );
};