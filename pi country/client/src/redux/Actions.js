import axios from "axios"
import { GET_PAISES, GET_DETAIL_PAISES } from "./typesActions"

export const getPaises = () => {
    return async function (dispatch) {
        const url = await axios.get("http://localhost:3001/countries")
        const data = url.data
        dispatch({ type: GET_PAISES, payload: data })
    }
}

export const getdetailPaises = (id) => {
    return async function (dispatch) {
        const url = await axios.get(`http://localhost:3001/countries/${id}`)
        const data = url.data
        dispatch({ type: GET_DETAIL_PAISES, payload: data })
    }
}









