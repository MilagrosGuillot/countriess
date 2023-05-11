import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getdetailPaises } from "../../redux/Actions";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import ActivityCard from "../../views/ActivityCard"


const Detail = () => {
  const detailPais = useSelector((state) => state.detailPaises);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getdetailPaises(id));
}, [dispatch, id]);

return (
    <div className={styles.container}>
    {detailPais.nombre ? (
        <div className={styles.infoContainer}>
        <h2>{detailPais?.id}</h2>
        <p>{detailPais?.nombre}</p>
        <p>{detailPais?.continente}</p>
        <p>{detailPais?.capital}</p>
        <p>{detailPais?.subregion}</p>
        <p>{detailPais?.area}</p>
        <p>{detailPais?.poblacion}</p>
        <img src={detailPais?.bandera} alt="img" className={styles.img} />
        </div>
    ) : (
        <h3>Loading...</h3>
    )

    }

        <h2>Actividades: </h2>
    {detailPais.activities && detailPais.activities.length > 0 ? detailPais.activities.map(a =>
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
);
};

export default Detail;
