import React from 'react';

import styles from "./about.module.css";
import {getImageUrl} from "../../utils.js";

export const About = () => {
    return (
        <section className={styles.section}>
            <div className={styles.background} />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <ul className={styles.aboutItems}>
                            <li className={styles.aboutItem}>
                                <img src={getImageUrl("about/knowlageImg.png")} alt="KnowlageBase Image" />
                                <div className={styles.aboutItemText}>
                                    <h3>Wygodna Instrukcja</h3>
                                    <p>
                                        Przeglądaj instrukcję gry wygodnie w przeglądarce lub na telefonie,
                                        łatwo wyszukuj interesujące Cię zagadnienia
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img src={getImageUrl("about/bestiaryImg.png")} alt="Bestiary Image" />
                                <div className={styles.aboutItemText}>
                                    <h3>Bestiariusz</h3>
                                    <p>
                                        W bestiariuszu poznasz nie tylko przerażające potwory, z którymi przyjdzie Ci
                                        się zmierzyć, lecz także niezwykłych sprzymierzeńców, którzy mogą odmienić losy
                                        twojej wędrówki.
                                    </p>
                                </div>
                            </li>
                            <li className={styles.aboutItem}>
                                <img src={getImageUrl("about/calcImg.png")} alt="Calc Image" />
                                <div className={styles.aboutItemText}>
                                    <h3>Kalkulator walk</h3>
                                    <p>
                                        Wprowadź statystyki i karty akcji – kalkulator sam obliczy wynik walki i pokaże
                                        jej przebieg. Nie musisz martwić się kolejnością kart, my zrobimy to za Ciebie.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </section>
    )
}