import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchResults } from "../../redux/Actions"; // Importa la acción updateSearchResults

const SearchBar = ({ setPageNum }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [hasSpecialCharacters, setHasSpecialCharacters] = useState(false);

  const countries = useSelector(state => state.countries)

  const performSearch = (searchText) => {
    const hasSpecialChars = /[^a-zA-Z\s]/.test(searchText);
    setHasSpecialCharacters(hasSpecialChars);
  
    if (hasSpecialChars) {
      return [];
    }
    const filteredCountries = countries.filter((country) =>
      country.nombre.toLowerCase().startsWith(searchText.toLowerCase())
    );
    return filteredCountries;
  };
  

  const handleChange = (event) => {
    setName(event.target.value);
    // Realiza la lógica de búsqueda y actualiza los resultados de búsqueda en el estado global
    const searchResults = performSearch(event.target.value); // 
    dispatch(updateSearchResults(searchResults));
    console.log(searchResults)
  };
  
  const handleClick = () => {
    setName("");
  };

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
          <button onClick={handleClick}>Buscar</button>
        </Link>
      </form>
      {hasSpecialCharacters && (
        <p className={styles.error}>No se permiten caracteres especiales en la búsqueda.</p>
      )}
    </div>
  );
  
      }
export default SearchBar;


