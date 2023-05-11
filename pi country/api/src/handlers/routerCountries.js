const express = require("express");
const routerCountries = express();
routerCountries.use(express.json());
const {getCountries, getCountry, getCountryName} = require ("../controllers/countriesController")

routerCountries.get("/", async (req, res) => {
    const {name} = req.query
    try{
        const country = name? await getCountryName(name) : await getCountries()
        res.status(200).json(country)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

routerCountries.get("/:id", async (req, res) => {
    const {id} = req.params
    try{
        const country = await getCountry(id)
        res.status(200).json(country)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})



module.exports = routerCountries