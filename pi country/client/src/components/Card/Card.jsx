import styles from "./Card.module.css"
import {NavLink} from "react-router-dom"

const Card = ({id, nombre, bandera, continente}) => {
    return(
        <div className={styles.divCard}>
            <NavLink to={`/detail/${id}`} className={styles.linkStyle}>
            <p>Nombre: {nombre}</p>
            <img src={bandera} alt="Bandera" className={styles.img}/>
            <p>Continente: {continente}</p>
            </NavLink>
        </div>
    )

}
export default Card