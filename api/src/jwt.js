const jwt = require("jsonwebtoken")
require('dotenv').config();
const secret = process.env.SECRET

const generarToken = (user) => {
    const claveSecreta = secret;
    const token = jwt.sign({user: user}, claveSecreta, {expiresIn:"1"})
    return token;
}

module.exports = {
    generarToken
}