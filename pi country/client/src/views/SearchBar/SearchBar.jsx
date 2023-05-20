import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPaisesNamee } from "../../redux/Actions";
import { Link } from "react-router-dom";
const SearchBar = () => {
const [name, setName] = useState("");
const dispatch = useDispatch();

const handleChange = (event) => {
    setName(event.target.value);
};

const handleClick = (event) => {
    event.preventDefault();
    dispatch(getPaisesNamee(name));
};

return (
    <div>
    <form onSubmit={handleClick}>
        <input
        type="text"
        placeholder="Buscar países..."
        value={name}
        onChange={handleChange}
        />
    <Link to={`/search/${name}`} >  <button type="submit">Buscar</button>  </Link>
    </form>
    
    </div>
    
);
};

export default SearchBar;

