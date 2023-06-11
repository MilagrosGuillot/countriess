import Card from "../Card/Card"
import styles from "./Cards.module.css"

const Cards = ({currentCountries}) => {

return(
<div className={styles.cardsContainer}>
{ Array.isArray(currentCountries) ?
    currentCountries?.map(pais => {
        return <Card
    key={pais.id}
    id={pais.id}
    nombre={pais.nombre}
    bandera={pais.bandera}
    continente={pais.subregion}
        ></Card>
    })
    : "NO"
}

</div>
)}
export default Cards