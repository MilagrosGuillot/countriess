import { GET_PAISES, GET_DETAIL_PAISES, GET_PAISES_NAME, POST_ACTIVITY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_ACTIVITIES } from "./typesActions"

const initialState = {
   paises: [],
   allpaises: [],
   detailPaises: {},
   getPaisesNamee:[],
   activities: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_PAISES:
    return {...state, paises: action.payload, allpaises:action.payload}
    
    case GET_DETAIL_PAISES:
        return {...state, detailPaises: action.payload }
    
        case GET_PAISES_NAME:
        return {...state, getPaisesNamee: action.payload}
        
        case POST_ACTIVITY:
            return {...state}

        case FILTER_BY_CONTINENT:
        const allpaises = state.allpaises
        const filterContinente = action.payload === "All" ? allpaises : allpaises.filter(el => el.continente ===action.payload)

        return{
            ...state, paises: filterContinente
            }

            case FILTER_BY_ACTIVITY:
                const activities = state.activities
                const filterActivity = action.payload === "activities" ? activities : "NO hay"
                console.log(filterActivity)
                return { ...state, activities: filterActivity }
            
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }


        default:
            return { ...state }
            
    }}

    export default rootReducer