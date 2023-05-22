import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPaisesNamee } from "../../redux/Actions";
import { Link } from "react-router-dom";


const SearchBar = () => {
const [name, setName] = useState("");
const dispatch = useDispatch();

const handleChange = (event) => {
    setName(event.target.value);
    console.log(name)
};

const handleClick = (event) => {
    event.preventDefault();
    dispatch(getPaisesNamee(name));
};

return (
    <div>
        <input
        type="text"
        placeholder="Buscar países..."
        onChange={handleChange}
        />
    <button type="submit" onSubmit={(e) => handleClick(e)}>Buscar</button>
    </div>
    
);
};

export default SearchBar;

