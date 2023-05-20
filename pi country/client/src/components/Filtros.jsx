import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterbyContinent, filterActivity,getactivity} from "../redux/Actions"


const Filtro = () => {
    const dispatch = useDispatch()
    function handleFilterContinents (event) {
        dispatch(filterbyContinent(event.target.value))
        }
        
        function handleFilterActivity(event) {
            console.log("Actividad seleccionada:", event.target.value);
            dispatch(filterActivity(event.target.value));
        }
        useEffect(() => {
            dispatch(getactivity());
          }, [dispatch]);
return(
    <div>
<select onChange={(event) => handleFilterContinents(event)}>
  <option value="All">Continente</option>
  <option value="North America">America del norte</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europa</option>
  <option value="Oceania">Oceania</option>
  <option value="Africa">Africa</option>
  <option value="Antarctica">Antartida</option>
  <option value="South America">America del sur</option>
</select>

<select onChange={(event)=> handleFilterActivity(event)}>
<option>Actividades</option>
    <option value="activities">Paises con Actividades</option>
    <option value="all">Paises sin Actividades</option>
</select>

<select>
  <option value="ordenar">Ordenar</option>
  <option value="a-z">a-z</option>
  <option value="z-a">z-a</option>
</select>
<select>
  <option value="poblacion">Poblacion</option>
  <option value="minima">minima</option>
  <option value="maxima">maxima</option>
</select>

</div>
)}

export default Filtro;