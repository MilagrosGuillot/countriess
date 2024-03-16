import { useState, useEffect } from "react"
import Validate from "./validatee";
import { useDispatch, useSelector } from "react-redux";
import {getCountries} from "../../redux/Actions"
import { postActivity } from "../../redux/Actions";
import styles from "./Form.module.css"

const Form = () => {
const  [errors, setErrors] = useState({
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
const countries = useSelector(state => state.countries)

useEffect(()=>{
    dispatch((getCountries()))
  },[dispatch])

const handleChange = (event) =>{
        setState({...state,[event.target.name]:event.target.value})
        setErrors(Validate({...state,[event.target.name]:event.target.value}))
    }

function handleSubmit(event) {
    event.preventDefault()
    dispatch(postActivity(state))
    alert('Actividad creada exitosamente')
    setState({
        nombre: "",
        dificultad:"",
        duracion:"",
        temporada:"",
        country: []
    })}

const handleSelect= (event) => {
    setState({...state,
    country:[...state.country,event.target.value]
    })
    setErrors(Validate({...state,
    country:[...state.country,event.target.value]
    }))
  }
   //Elimina los paises seleccionados
  const handleDelete = (elem) => {
setState({...state ,
    country: state.country.filter(el=> el !== elem)
  })
  // Actualiza los errores después de eliminar un país seleccionado
  setErrors(Validate({...state,
    country:[...state.country.filter(el=> el !== elem)]
    }))
  }
  const disable = () => {
    for (let error in errors) {
      if (errors[error] !== "") {
        return true; // Si hay al menos un error, deshabilitar el botón
      }
    }
    return false; // Si no hay errores, habilitar el botón
  };
  
return(
    <div className={styles.container} >
        <form onSubmit={(event) =>handleSubmit(event)} className={styles.form} >
            {console.log(errors)}
            {console.log(state)}
            <h1>Crear Actividad </h1>

            <label>Nombre: </label>
            <input type="text" name="nombre" onChange={(event)=>handleChange(event)} value={state.nombre}></input>
            <p>{errors.nombre}</p>
        <hr></hr>

    <label >Duracion: </label>
    <input type={"number"} value={state.duracion}  name="duracion" placeholder='en horas..' onChange={(event)=>handleChange(event)}></input>
    <p>{errors.duracion}</p>
    <hr></hr>

    <label>Dificultad</label>
        <select  name='dificultad' onChange={(event)=>handleChange(event)} className={styles.select} value={state.dificultad}> 
        <option className={styles.option} disabled> dificultad</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
        </select>
        <p>{errors.dificultad}</p>
        <hr></hr>

        <label >Temporada</label>
        <select name='temporada'onChange={(event)=>handleChange(event)} className={styles.select}>
        <option className={styles.option} disabled>temporada</option>
            <option value={'Verano'}>Verano</option>
            <option value={'Otoño'}>Otoño</option>
            <option value={'Invierno'}>Invierno</option>
            <option value={'Primavera'}>Primavera</option>
        </select>
        <p>{errors.temporada}</p>

 <label>Seleccionar pais/es</label>
        <select onChange={(event) => handleSelect(event)} className={styles.select}>
            <option name="country" className={styles.option} >Elegir pais</option>
            {
            countries?.map((p)=> <option
                key={p.id}>
                {p.nombre}</option>)
            }
        </select>
        <p>{errors.country}</p>

        <button type="submit" disabled={disable()} className={styles.botonUno}>Enviar</button>
        </form> 
        <ul className={styles.ul}><li>{state.country.map((elem) => (
            <div key={elem} className={styles.diContainerDos}>
            <p>{elem}</p>
            <button onClick={()=> handleDelete(elem)} className={styles.boton}>x</button>
            </div>
            ))}
            </li>
            </ul>
    </div>
)}

export default Form