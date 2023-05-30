import React, { useEffect,  } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../redux/Actions";
import styles from "./SearchBarName.module.css";

const SearchBarName = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const { name } = useParams();
  //const [currentPage, setCurrentPage] = useState(1); // Estado para almacenar la página actual
  //const countriesPerPage = 5; // Cantidad de países a mostrar por página

  useEffect(() => {
    dispatch(getCountryName(name));
  }, [dispatch, name]);

  // Lógica para calcular el índice del primer y último país a mostrar en la página actual
  //const indexOfLastCountry = currentPage * countriesPerPage;
  //const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  //const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Función para cambiar a la página siguiente

  return (
    <div>
    <div className={styles.container}>
        {countries.length > 0 ? (
        countries.map((country) => (
            <div key={country.nombre} className={styles.containerInfo}>
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
        <p>No se encontraron países.</p>
        )}
    </div>
    </div>
  );
};

export default SearchBarName;
