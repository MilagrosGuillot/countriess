import axios from "axios"
import { GET_PAISES, GET_DETAIL_PAISES, GET_PAISES_NAME, GET_ACTIVITIES } from "./typesActions"

export const getCountries = () => {
    return async function (dispatch) {
        const url = await axios.get("http://localhost:3001/countries")
        const data = url.data
        dispatch({ type: GET_PAISES, payload: data })
    }
}
export const getdetailCountry = (id) => {
    return async function (dispatch) {
        const url = await axios.get(`http://localhost:3001/countries/${id}`)
        const data = url.data
        dispatch({ type: GET_DETAIL_PAISES, payload: data })
    }
}
//export const updateSearchResults = (results) => ({
    //type: 'UPDATE_SEARCH_RESULTS',
    //payload: results,
 // });
  
export const getCountryName = (name) => {
    return async function (dispatch) {
        console.log("entro")
        const url = await axios.get('http://localhost:3001/countries?name=' + name)
        const data = url.data
        dispatch({ type: GET_PAISES_NAME, payload: data })
    }
}
export const postActivity = (state) => {
    return async function (dispatch) {
        const url = await axios.post("http://localhost:3001/activities", state)
        console.log(url)
        return url
    }
}
export const getactivity = () => {
    return async function(dispatch){
    const json = await axios.get('http://localhost:3001/activities')
    return dispatch({
        type: GET_ACTIVITIES,
        payload:json.data
    })
    }}

export const filterActivity = (payload) => {
    console.log(payload)
    return {
        type: "FILTER_BY_ACTIVITY" , payload
    }
}

export const filterbyContinent = (payload) => {
    console.log(payload)
    return {
        type: "FILTER_BY_CONTINENT" , payload
        
    }
}
export const filterPopulation = (payload) => {
    console.log(payload)
    return {
        type: "FILTER_POPULATION" , payload
    }
}
export const filterAbc = (payload) => {
    console.log(payload)
    return {
        type: "FILTER_ABC" , payload
    }
}





