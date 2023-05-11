import { Link } from "react-router-dom";
import React from "react";
import styles from "./LandingPage.module.css"


const landingPage = () => {
  return (
    <div className= {styles.conteinerDiv}>
      <h1 className={styles.containerh1}>"Guia de Paises, 
     L"</h1>
      <Link to="/home" className={styles.Link}>
      <h2 className={styles.h2}>Press to start</h2>
      </Link>
    </div>
  );
};
export default landingPage;