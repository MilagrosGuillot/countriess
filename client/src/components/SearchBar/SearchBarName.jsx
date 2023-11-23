import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../redux/Actions";
import styles from "./SearchBarName.module.css"

const SearchBarName = () => {
const countries = useSelector((state) => state.countries); 
const dispatch = useDispatch()
const { name } = useParams();

useEffect(() => {
    dispatch(getCountryName(name));
}, [dispatch, name]);

const filteredCountries = countries.filter((country) =>
country.nombre.toLowerCase().startsWith(name.toLowerCase())
);

return (
<div>
    <div className={styles.container}>
    {filteredCountries.length > 0 ? (
        filteredCountries.map((country) => (
        <div className={styles.containerInfo} key={country.id}>
            <h2>{country.nombre}</h2>
            <img src={country.bandera} alt="Bandera" />
            <p>Continente: {country.continente}</p>
            <p>Capital: {country.capital}</p>
            <p>Población: {country.poblacion}</p>
            <p>Subregión: {country.subregion}</p>
            <p>Área: {country.area}</p>
        </div>
        ))
    ) : (
        <p>No se encontraron países que coincidan con la búsqueda.</p>
    )}
    </div>
</div>
);
    }

export default SearchBarName;
