import { useState, useEffect } from "react"
import Validate from "./validatee";
import { useDispatch, useSelector } from "react-redux";
import {getPaises} from "../../redux/Actions"
import { postActivity } from "../../redux/Actions";
import styles from "./Form.module.css"


const Form = () => {
const  [error, setErrors] = useState({
    nombre: "",
    dificultad:"",
    duracion:"",
    temporada:"",
    country: []
    
})
const [state, setState] = useState({
    nombre: "",
    dificultad:"",
    duracion:"",
    temporada:"",
    country: []
})
const dispatch = useDispatch()
const pais = useSelector(state => state.paises)

useEffect(()=>{
    dispatch((getPaises()))
  },[dispatch])

const handlerChange = (event) =>{
        setState({...state,[event.target.name]:event.target.value})
        setErrors(Validate({...state,[event.target.name]:event.target.value}))
    }

function handlerSubmit(event) {
    event.preventDefault()
    dispatch(postActivity(state))
    alert('Actividad creada exitosamente')
    console.log(state)
    setState({
        nombre: "",
        dificultad:"",
        duracion:"",
        temporada:"",
        country: []
    })}

const handleSelect= (e) => {
    setState({...state,
    country:[...state.country,e.target.value]
    })
    setErrors(Validate({...state,
    country:[...state.country,e.target.value]
    }))
  }
  const handleDelete = (elem) => {
setState({
    ...state ,
    country: state.country.filter(el=> el !== elem)
  })
  }

return(
    <div >
        <form onSubmit={(event) =>handlerSubmit(event)} className={styles.container}>
            {console.log(error)}
            {console.log(state)}
            <h1>Crear Actividad </h1>

            <label>Nombre: </label>
            <input type="text" name="nombre" onChange={handlerChange} value={state.nombre}></input>
            <p>{error.nombre}</p>
        <hr></hr>


    <label>Duracion: </label>
    <input type={"number"} value={state.duracion} name="duracion" placeholder='en horas..' onChange={handlerChange}></input>
    <p>{error.duracion}</p>
    <hr></hr>


    <label>Dificultad</label>
        <select  name='dificultad' onChange={handlerChange}> value={state.dificultad}
        <option>dificultad</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
        </select>
        <p>{error.dificultad}</p>
        <hr></hr>

        <label>Temporada</label>
        <select name='temporada'onChange={handlerChange}>
        <option>temporada</option>
            <option value={'Verano'}>Verano</option>
            <option value={'Otoño'}>Otoño</option>
            <option value={'Invierno'}>Invierno</option>
            <option value={'Primavera'}>Primavera</option>
        </select>
        <p>{error.temporada}</p>

 <label>Seleccionar pais/es</label>
        <select onChange={(e) => handleSelect(e)} >
            <option name="country" >Elegir pais</option>
            {
            pais?.map((p)=> <option
                key={p.id}>
                {p.nombre}</option>)
            }
        </select>
        <p>{error.country}</p>

        <button type="submit" >Enviar</button>
        </form> 
        
        <ul><li>{state.country.map((elem) => (
            <div>
            <p>{elem}</p>
            <button onClick={()=> handleDelete(elem)}>x</button>
            </div>
            ))}
            </li>
            </ul>
    </div>
)}



export default Form