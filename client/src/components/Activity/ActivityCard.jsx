import styles from "./ActivityCard.module.css"

const ActivityCard = ({nombre, temporada, dificultad, id, duracion}) => {
return(
<div className={styles.container}>
<p>Nombre: {nombre}</p>
<p>temporada: {temporada}</p>
<p>dificultad: {dificultad}</p>
<p>duracion: {duracion}</p>

</div>
)}

export default ActivityCard