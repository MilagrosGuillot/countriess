import Card from "../Card/Card"
import styles from "./Cards.module.css"

const Cards = ({currentCharacters}) => {


return(
<div className={styles.cardsContainer}>
{
    currentCharacters?.map(pais => {
        return <Card
    key={pais.id}
    id={pais.id}
    nombre={pais.nombre}
    bandera={pais.bandera}
    capital={pais.capital}
    poblacion={pais.poblacion}
    subregion={pais.poblacion}
    area={pais.poblacion}
    continente={pais.continente}
        ></Card>
    })
}

</div>
)}
export default Cards