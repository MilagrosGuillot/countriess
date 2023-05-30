import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/Actions";
import styles from "./HomePage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import Paginado from "../Paginado/Paginado";
import Cards from "../../components/Cards/Cards"

const HomePage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const searchResults = useSelector((state) => state.searchResults);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage, setCountryPerPage] = useState(12);

  const displayedCountries = searchResults.length > 0 ? searchResults : countries;

  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

  const currentCountries = displayedCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.container}>
    
      <SearchBar setPageNum={setCurrentPage} />
      <Filter setCurrentPage={setCurrentPage} />
      <Paginado
        countryPerPage={countryPerPage}
        countries={displayedCountries.length}
        paginado={paginado}
      />
      <Cards currentCountries={currentCountries} />
    </div>
  );
};

export default HomePage;
