import { GET_PAISES, GET_DETAIL_PAISES,FILTER_POPULATION,FILTER_ABC, GET_PAISES_NAME, POST_ACTIVITY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_ACTIVITIES } from "./typesActions"

const initialState = {
   paises: [],
   allpaises: [],
   detailPaises: {},
   getPaisesNamee:[],
   activities: [],
   activity : []
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
                let filter=[]
                state.allpaises.map((country)=>(
                country.activities.map((activity)=> {
                    if(activity.nombre ===action.payload){
                    return filter.push(country)
                    }
                })
                ))
                return{
                ...state,
                paises: filter
                }
            
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload , activity:action.payload
            }
            case FILTER_POPULATION:
                    const sortedPaises = [...state.allpaises];
                    sortedPaises.sort((a, b) => {
                    if (action.payload === 'Desc') {
                        return a.poblacion - b.poblacion;
                    } else if (action.payload === 'Asc') {
                        return b.poblacion - a.poblacion;
                    } else {
                        return 0;
                    }
                    });
                    return { ...state, paises: sortedPaises };


                    case FILTER_ABC:
            
                            const sortedCountries = [...state.allpaises];
                            sortedCountries.sort((a, b) => {
                              if (action.payload === 'Asc') {
                                if (a.nombre > b.nombre) {
                                  return 1;
                                } else if (a.nombre < b.nombre) {
                                  return -1;
                                }
                                return 0;
                              } else if (action.payload === 'Desc') {
                                if (a.nombre > b.nombre) {
                                  return -1;
                                } else if (a.nombre < b.nombre) {
                                  return 1;
                                }
                                return 0;
                              }
                              return 0;
                            });
                            return { ...state, paises: sortedCountries };
                          




        default:
            return { ...state }
            
    }}

    export default rootReducer