import React from 'react';

import styles from "./hero.module.css";
import { getImageUrl } from "../../../utils.js";

export const Hero = () => {
    return (
        <section className={styles.container} id="hero">

            <div className={styles.content}>
                    <h1 className={styles.title}>Przeznaczenie wzywa</h1>
                    <p className={styles.description}>Miło Cię widzieć, podróżniku!</p>
                    <p className={styles.descriptionText}>Zanurz się w mroczny, pełen magii i niebezpieczeństw świat Wiedźmina.
                        Tutaj każda decyzja ma znaczenie, a przygoda czai się za każdym rogiem.
                        Przygotuj miecze, wypij eliksir i ruszaj ku przeznaczeniu!</p>
            </div>

            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero"/>

        </section>
    );
};