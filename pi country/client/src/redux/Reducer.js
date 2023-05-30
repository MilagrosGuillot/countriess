import { GET_PAISES, GET_DETAIL_PAISES,FILTER_POPULATION, UPDATE_SEARCH_RESULTS , FILTER_ABC, GET_PAISES_NAME, POST_ACTIVITY, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, GET_ACTIVITIES } from "./typesActions"
const initialState = {
  countries: [],
   allCountries: [],
   detailCountry: {},
   activities: [],
   activity : [],
   getcountriesname:[],
   searchResults: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_PAISES:
    return {...state, countries: action.payload, allCountries :action.payload}
    
    case GET_DETAIL_PAISES:
        return {...state, detailCountry: action.payload }
    
        case GET_PAISES_NAME:
          
        return {...state, countries: action.payload , allCountries: action.payload  }
        
        case POST_ACTIVITY:
            return {...state}

        case FILTER_BY_CONTINENT:
        const allCountries = state.allCountries;
        const filterContinente = action.payload === "All" ? allCountries : allCountries.filter(el => el.continente ===action.payload)
        return{
            ...state, countries: filterContinente 
            }

            case FILTER_BY_ACTIVITY:
              const filteredCountries = state.allCountries.filter((country) =>
                country.activities.some((activity) => activity.nombre === action.payload)
              );
              return {
                ...state,
                countries: filteredCountries,
              };
            
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload , activity: action.payload
            }
            case FILTER_POPULATION:
                    const sortedPaises = [...state.countries];
                    sortedPaises.sort((a, b) => {
                    if (action.payload === 'Desc') {
                        return a.poblacion - b.poblacion;
                    } else if (action.payload === 'Asc') {
                        return b.poblacion - a.poblacion;
                    } else {
                        return 0;
                    }
                    });
                    return { ...state, countries: sortedPaises };

                    case FILTER_ABC:
                            const sortedCountries = [...state.countries];
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
                            return { ...state, countries: sortedCountries };
                      
        default:
            return { ...state }
            
    }}

    export default rootReducer