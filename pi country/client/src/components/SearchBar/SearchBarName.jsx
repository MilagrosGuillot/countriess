import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../redux/Actions";
import styles from "./SearchBarName.module.css"

const SearchBarName = () => {

const countries = useSelector((state) => state.getcountriesname); 
const dispatch = useDispatch()
const { name } = useParams();

useEffect(() => {
    dispatch(getCountryName(name));
  }, [dispatch, name]);

return (
    <div>
    <div className={styles.container}>
        
        {
        countries.nombre ? (
        <div className={styles.containerInfo}>
            <h2>{countries.nombre}</h2>
            <img src={countries.bandera} alt="Bandera" />
            <p>Continente: {countries.continente}</p>
            <p>Capital: {countries.capital}</p>
            <p>Población: {countries.poblacion}</p>
            <p>Subregión: {countries.subregion}</p>
            <p>Área: {countries.area}</p>
        </div>
        
        ) : "No existe el pais"
        }
    </div>
    </div>
);
}

export default SearchBarName;
