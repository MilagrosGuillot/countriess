const express = require("express");
const routerActivity = express();
routerActivity.use(express.json());
const {getActivities, postActivities} = require("../controllers/activityController")

routerActivity.get( "/", async (req, res) => {
    try{
    const activities = await getActivities()
    res.status(200).json(activities)
    console.log(activities)
} catch(error){
    res.status(400).json({error: error.message})
}
})

routerActivity.post( "/", async (req, res) => {
    const {id, nombre, dificultad, duracion, temporada, country} = req.body
    try{
    const activities = await postActivities(id, nombre, dificultad, duracion, temporada, country)
    res.status(200).json(activities)
    console.log(activities)
} catch(error){
    res.status(400).json({error: error.message})
}
})

module.exports = routerActivity