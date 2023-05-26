import React from "react";
import Cards from "../../views/Cards/Cards";
import { useEffect, useState  } from "react";
import { useDispatch, useSelector  } from "react-redux";
import {getCountries} from "../../redux/Actions"
import styles from "./HomePage.module.css"
import SearchBar from "../../views/SearchBar/SearchBar";
import Filter from "../../views/Filter/Filter";
import Paginado from "../Paginado/Paginado";

const HomePage = () => {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const [currentPage, setCurrentPage] = useState(1)
  const [countryPerPage, setCountryPerPage] = useState(12)

const indexOfLastCountry= currentPage * countryPerPage //12
const indexOfFirstCountry = indexOfLastCountry - countryPerPage //0

const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry) 

const paginado = (pageNumber) => {
setCurrentPage(pageNumber)
}

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
<div className={styles.container}>
   
    <SearchBar setPageNum={setCurrentPage}></SearchBar>
      <Filter setCurrentPage={setCurrentPage}></Filter>
      <Paginado countryPerPage={countryPerPage} countries={countries.length} paginado={paginado}></Paginado>
      <Cards currentCountries={currentCountries}></Cards>
      
    </div>
  );
};
export default HomePage;
