import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPaisesNamee } from "../redux/Actions";


function SearchBarName() {

const pais = useSelector((state) => state.getPaisesNamee); 
const dispatch = useDispatch()
const { name } = useParams();

useEffect(() => {
    dispatch(getPaisesNamee(name));
  }, [dispatch, name]);

return (
    <div>
    <div>
        <h1>Resultados para "{name}"</h1>
        {pais && (
        <div>
            <h2>{pais.nombre}</h2>
            <img src={pais.bandera} alt="Bandera" />
            <p>Continente: {pais.continente}</p>
            <p>Capital: {pais.capital}</p>
            <p>Población: {pais.poblacion}</p>
            <p>Subregión: {pais.subregion}</p>
            <p>Área: {pais.area}</p>
        </div>
        )}
    </div>
    </div>
);
}

export default SearchBarName;
