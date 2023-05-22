import { useEffect , } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterbyContinent, filterActivity,getactivity, filterPopulation, filterAbc} from "../redux/Actions"


const Filtro = () => {
    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch()


    function handleFilterContinents (event) {
      
        dispatch(filterbyContinent(event.target.value))
        }
        function handleFilterPoplation (event) {
          
          
          dispatch(filterPopulation(event.target.value))
          }
          function handleFilterAbc (event) {
           
          
            dispatch(filterAbc(event.target.value))
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
<option value={'DEFAULT'} disabled>Actividades</option>
{
                activities?.map((e)=>{
                return <option key={e.id} value={e.activities}>{e.nombre}</option>
                })}
</select>

<select onChange={(event) => handleFilterAbc(event)}>
  <option value={'DEFAULT'} disabled >Ordenar</option>
  <option value="Asc">a-z</option>
  <option value="Desc">z-a</option>
</select>
<select onChange={(event) => handleFilterPoplation(event)}>
  <option value={'DEFAULT'} disabled>Poblacion</option>
  <option value="Desc">minima</option>
  <option value="Asc"> maxima</option>
</select>

</div>
)}

export default Filtro;