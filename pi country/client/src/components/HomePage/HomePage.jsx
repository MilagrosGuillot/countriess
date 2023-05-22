import React from "react";
import Cards from "../../views/Cards/Cards";
import { useEffect, useState  } from "react";
import { useDispatch, useSelector  } from "react-redux";
import {getPaises} from "../../redux/Actions"
import styles from "./HomePage.module.css"
import SearchBar from "../../views/SearchBar/SearchBar";
import Filtro from "../Filtros";
import Paginado from "../Paginado/Paginado";

const HomePage = () => {
  const dispatch = useDispatch()
  const paises = useSelector(state => state.paises)
  const [currentPage, setCurrentPage] = useState(1)
  const [charactersPerPage, setCharactersPerPage] = useState(12)

const indexOfLastCharacter = currentPage * charactersPerPage 
const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage 

const currentCharacters = paises.slice(indexOfFirstCharacter, indexOfLastCharacter)

const paginado = (pageNumber) => {
setCurrentPage(pageNumber)
}

  useEffect(() => {
    dispatch(getPaises());
  }, [dispatch]);

  return (
   
<div className={styles.container}>
      
      
      <Filtro setCurrentPage={setCurrentPage}></Filtro>
      <Paginado charactersPerPage={charactersPerPage} paises={paises.length} paginado={paginado}></Paginado>
      <SearchBar></SearchBar>
      <Cards currentCharacters={currentCharacters}></Cards>
      
    </div>
  );
};
export default HomePage;
