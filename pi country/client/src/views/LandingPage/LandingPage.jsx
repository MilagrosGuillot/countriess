import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import imagen from "./assets/imagen.jpg";
import avion from "./assets/avion.png";

const LandingPage = () => {
  return (
    <div className={styles.colorSection}>
      <div className={styles.containerWrapper}>
        <div className={`${styles.containerDiv} ${styles.containerContent}`}>
          <h1 className={styles.containerh1}>Guía de Países</h1>
          <Link to="/home"className={`${styles.Link} ${styles.linkAnimationPerpendicular}`}>
            <img className={styles.button} src={avion} alt="avion" />
          </Link>
          <h1>Ingresar</h1>
        </div>

        <div className={styles.containerImg}>
          <img className={styles.img} src={imagen} alt="Imagen" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


