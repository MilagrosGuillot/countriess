const axios = require("axios")
const {Country, Activity} = require("../db")
const { Op } = require('sequelize');


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
                    continents: country.subregion,
                    capital: country.capital ? country.capital[0] : 'Capital indefinida',
                    subregion: country.subregion ? country.subregion : 'Subregion indefinida',
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
                        continente: country.subregion,
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
    const dbcountry = await Country.findAll({
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