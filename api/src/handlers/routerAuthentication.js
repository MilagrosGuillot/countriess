const express = require("express");
const jwt = require("jsonwebtoken")
require('dotenv').config();
const secret = process.env.SECRET
const routerAuthentication = express();
routerAuthentication.use(express.json());
const { generarToken } = require("../jwt");
const {Country, User} = require("../db")
const { Op } = require('sequelize');


/*routerAuthentication.post("/token", async (req, res) => {
    const {id:sub, name} = {id: "mili", name:"gami"}
    const token = jwt.sign({
        sub,
        name,
        exp: Date.now() + 60 *1000
    }, secret)
    res.send({token})
})
*/
routerAuthentication.post("/createUser", async (req, res) => {
    const {id, name, lastName, age } = req.body; 
    try {
        const createUser = await User.create({id, name, lastName, age }); 
        const token = generarToken(name);
        res.send({ token });
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).send("Error interno del servidor");
    }
});


routerAuthentication.post("/login", async (req, res) => {
    try {
        const { name } = req.body; 
        const findAllUser = await User.findAll({
            where: { name: name }
        });
        if (findAllUser.length === 0) {
            return res.status(404).send({ message: "Usuario no encontrado" });
        }
        const token = generarToken(name);
        res.send({ token });
        
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).send({ message: "Error interno del servidor" });
    }
});



module.exports = routerAuthentication