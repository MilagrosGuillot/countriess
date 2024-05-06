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

routerAuthentication.post("/login", async (req, res) => {
    const { name } = req.body; 
    
    const findAllUsuario = await User.findAll({
        where: { name: name }
    });
    const token = generarToken(name);
    res.send({ token });
});


module.exports = routerAuthentication