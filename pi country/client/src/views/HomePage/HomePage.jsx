import React from "react";
import { useEffect, useState  } from "react";
import { useDispatch, useSelector  } from "react-redux";
import {getCountries} from "../../redux/Actions"
import styles from "./HomePage.module.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import Paginado from "../Paginado/Paginado";
import Cards from "../../components/Cards/Cards"

const HomePage = () => {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const [currentPage, setCurrentPage] = useState(1)
  const [countryPerPage, setCountryPerPage] = useState(12)


const indexOfLastCountry= currentPage * countryPerPage //12
const indexOfFirstCountry = indexOfLastCountry - countryPerPage //0

//const displayedCountries = searchResults.length > 0 ? searchResults : countries;
const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry) 

const paginado = (pageNumber) => {
setCurrentPage(pageNumber)
}

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
<div className={styles.container}>
   
    <SearchBar setCurrentPage={setCurrentPage} paginado={paginado}></SearchBar>
      <Filter setCurrentPage={setCurrentPage}></Filter>
      <Paginado countryPerPage={countryPerPage} countries={countries.length} paginado={paginado} currentPage={currentPage}></Paginado>
      <Cards currentCountries={currentCountries}></Cards>
      
    </div>
  );
};
export default HomePage;
