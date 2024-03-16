import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getdetailCountry } from "../../redux/Actions";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import ActivityCard from "../../components/Activity/ActivityCard"

const Detail = () => {
  const detailCountry = useSelector((state) => state.detailCountry);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getdetailCountry(id));
}, [dispatch, id]);

return (
    <div className={styles.container}>
    {detailCountry.nombre ? (
        <div className={styles.infoContainer}>
        <h2>{detailCountry?.id}</h2>
        <p>Nombre: {detailCountry?.nombre}</p>
        <p>Continente: {detailCountry?.continente}</p>
        <p>Capital: {detailCountry?.capital}</p>
        <p>Subregion: {detailCountry?.subregion}</p>
        <p>Area: {detailCountry?.area}</p>
        <p> Poblacion: {detailCountry?.poblacion}</p>
        <img src={detailCountry?.bandera} alt="img" className={styles.img} />
        </div>
    ) : (
        <h3>Cargando...</h3>
    )
    }
    <div className={styles.ActivityCard}>
        <h2 >Actividades: </h2>
    {detailCountry.activities  && detailCountry.activities.length > 0 ? detailCountry.activities.map(a =>
    <ActivityCard
    nombre={a.nombre}
    temporada={a.temporada}
    duracion={a.duracion}
    dificultad={a.dificultad}
    id={a.id} key={a.id}
    /> )
    : <p>No hay actividades registradas</p>
    }
    </div>
    </div>
);
};

export default Detail;
