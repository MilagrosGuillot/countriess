import { GET_PAISES, GET_DETAIL_PAISES } from "./typesActions"

const initialState = {
   paises: [],
   detailPaises: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_PAISES:
    return {...state, paises: action.payload }
    
    case GET_DETAIL_PAISES:
        return {...state, detailPaises: action.payload }


        default:
            return { ...state }
            
    }}

    export default rootReducer