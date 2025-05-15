import React from 'react';

import styles from "./outro.module.css";
import { Button } from "../../ui/button/button";

export const Outro = () => {
    return (
        <section className={styles.section}>
            <div className={styles.background} />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2>Gotów na szlak ?</h2>
                        <p>
                            Skorzystaj z interaktywnej instrukcji, poznaj potwory w bestiariuszu i przygotuj się
                            do walki z pomocą naszego kalkulatora.
                        </p>
                        <Button href="#register">Stwórz konto !</Button>
                    </div>
                </div>
        </section>
    )}