import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryName } from "../../redux/Actions";
import styles from "./SearchBar.module.css"
import { Link } from "react-router-dom";

const SearchBar = ({setPageNum}) => {
const [name, setName] = useState("");
const dispatch = useDispatch();

const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value)
};

const handleClick = (event) => {
 
    //dispatch(getCountryName(name));
    setName("")
  };

return (
    <form className={styles.container}>
        <input
        className={styles.input}
        type="text"
        value={name}
        placeholder="Buscar países..."
        onChange={(event) => handleChange (event)}
        />
   <Link to={`/search/${name}`}>
     <button onClick={(event) => handleClick(event)}>Buscar</button>
     </Link>
    </form>
    
);
};

export default SearchBar;

