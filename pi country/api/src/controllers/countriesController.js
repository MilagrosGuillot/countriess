const axios = require("axios")
const {Country, Activity} = require("../db")
const { Op } = require('sequelize');


const cleanRecipes = (rec) => {
    return rec.map((el) => {
        return {
            id: el.cioc,
            name: el.name.common,
            Bandera: el.flags[1],
            continente: el.continents,
            capital: el.capital,
            area: el.area,
            subregion: el.subregion,
            poblacion: el.population,
        }
    });
};

const getCountries = async () => {
    let dbCountries = await Country.findAll({
        include: [Activity]
    })
    try {
        if(dbCountries.length === 0) {
            const { data } = await axios.get('https://restcountries.com/v3/all');
            
            const countries = data.map((country) => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flags: country.flags[1],
                    continents: country.continents[0],
                    capital: country.capital ? country.capital[0] : 'Undefined capital city',
                    subregion: country.subregion ? country.subregion : 'Undefinded Subregion',
                    area: country.area,
                    population: country.population
                };
            })
        
            countries.forEach((country) => {
                Country.findOrCreate({
                    where: { id: country.id },
                    defaults: {
                        id: country.id,
                        nombre: country.name,
                        bandera: country.flags,
                        continente: country.continents,
                        capital: country.capital,
                        subregion: country.subregion,
                        area: country.area,
                        poblacion: country.population,
                    }
                })
            });
            dbCountries = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ["id", "nombre", "dificultad", "duracion","temporada"],
                    through:{                 
                        attributes:[],
                    }}
            })
        }
        return dbCountries
    } catch(error){
        console.log('Error getCountries en controller ' + error)
    }
}
/*const getAllCountries = async () => {
const country = "https://restcountries.com/v3/all"
return axios(country).then(response => {
    const apiRecipeRaw = response.data
    const apiRecipes = cleanRecipes(apiRecipeRaw);
    return apiRecipes
})}
*/

const getCountry = async (id) => {
const countries = await Country.findByPk( id, { include: {
model: Activity,
attributes: ["id", "nombre", "dificultad", "duracion","temporada"]
}
})
console.log(countries)
return countries
}

const getCountryName = async (name) => {
    if(name){
    const dbcountry = await Country.findOne({
        where: { nombre: { [Op.iLike]: `%${name}%` } },
        include: {
        model: Activity,
        attributes: ["id", "nombre", "dificultad", "duracion", "temporada"],
        },
    })
if (dbcountry) {
    return dbcountry;
} else {
    return "No existe el país";
}}}


module.exports = { getCountries, getCountry, getCountryName}