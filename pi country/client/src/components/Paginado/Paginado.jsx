import styles from "./Paginado.module.css"
import React from 'react'


const Paginado = ({paises, charactersPerPage,paginado }) => {
  const pageNumbers = []

  for(let i=1; i<= Math.ceil(paises /charactersPerPage);i++){ 
    pageNumbers.push(i)
  }

  return (
      <ul className={styles.paginado}>
        {
          pageNumbers &&
          pageNumbers.map((e)=>(
            <li key={e}>
              <button onClick={()=>paginado(e)}>{e}</button>
            </li>
          ))
        }
      </ul>
  )
}

export default Paginado;

