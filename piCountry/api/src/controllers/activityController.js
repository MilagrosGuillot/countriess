
const {Country, Activity} = require("../db")

const getActivities = async () => {
const dbActivity = await Activity.findAll()
return dbActivity
}

const postActivities = async (id, nombre, dificultad, duracion, temporada, country) => {
const dbactivity = await Activity.create({id, nombre, dificultad, duracion, temporada})
const findAllcountry = await Country.findAll({
    where: { nombre: country }
})
await dbactivity.addCountry(findAllcountry)
return dbactivity
}



module.exports = {getActivities, postActivities}