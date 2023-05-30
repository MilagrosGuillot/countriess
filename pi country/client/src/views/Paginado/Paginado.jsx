import styles from "./Paginado.module.css"
import React from 'react'

const Paginado = ({countries, countryPerPage,paginado,currentPage }) => {
  const pageNumbers = []

  for(let i=1; i<= Math.ceil(countries /countryPerPage);i++){ 
    pageNumbers.push(i)
  }

  return (
      <ul className={styles.paginado}>
        {
          pageNumbers &&
          pageNumbers.map((e)=>(
            <li key={e}>
              <button onClick={()=>paginado(e)} className={`${currentPage === e ? styles.activePage : ''}`}>{e}</button>
            </li>
          ))
        }
      </ul>
  )
}

export default Paginado;

