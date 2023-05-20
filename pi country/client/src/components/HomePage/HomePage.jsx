import React from "react";
import Cards from "../../views/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getPaises, filterbyContinent, filterActivity} from "../../redux/Actions"
import styles from "./HomePage.module.css"
import SearchBar from "../../views/SearchBar/SearchBar";
import Filtro from "../Filtros";

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPaises());
  }, [dispatch]);

  return (
   
<div className={styles.container}>
      <h1>Paises</h1>
      <Filtro></Filtro>
      <SearchBar></SearchBar>
      <Cards></Cards>
      
    </div>
  );
};
export default HomePage;
