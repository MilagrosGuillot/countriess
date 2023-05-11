import Card from "../Card/Card"
import { useSelector } from "react-redux"
import styles from "./Cards.module.css"

const Cards = () => {
    /*const [currentPage, setCurrentPage] = useState(1);
const pageSize = 10;
const startIndex = (currentPage - 1) * pageSize;
const endIndex = startIndex + pageSize;
const paisesPaginaActual = paises.slice(startIndex, endIndex);
*/
const paises = useSelector((state) => state.paises);
return(
<div className={styles.cardsContainer}>
{
    paises.map(pais => {
        return <Card
    key={pais.id}
    id={pais.id}
    nombre={pais.nombre}
    bandera={pais.bandeara}
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