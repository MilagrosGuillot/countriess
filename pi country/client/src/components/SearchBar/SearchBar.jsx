import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountryName } from "../../redux/Actions";
import { Link } from "react-router-dom";

const SearchBar = ({setCurrentPage}) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
const countries = useSelector(state => state.countries)

  const handleChange = (event) => {
    const searchText = event.target.value;
    setName(searchText);
    setCurrentPage(1)
    dispatch(getCountryName(searchText));
    
    console.log("entro al handleChange");
  };


  
  const handleClick = () => {
    setName("");
  };

  const hasSpecialCharsOrNumbers = /[^a-zA-Z\s]/.test(name) || /\d/.test(name);
  const isButtonDisabled = !name || hasSpecialCharsOrNumbers || countries.length === 0 ; // Deshabilitar el botón si el campo está vacío o hay errores en el nombre

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={name}
          placeholder="Buscar países..."
          onChange={handleChange}
        />
        <Link to={`/search/${name}`}>
          <button onClick={handleClick} disabled={isButtonDisabled}>
            Buscar
          </button>
        </Link>
      </form>
      {hasSpecialCharsOrNumbers && (
        <p className={styles.error}>
          El texto contiene caracteres especiales o números.
        </p>
      )}
       {countries.length === 0 && (
        <p className={styles.error}>
          Pais no encontrado.
        </p>
       )}
    
    </div>
  );
};

export default SearchBar;






