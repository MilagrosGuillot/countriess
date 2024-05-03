const jwt = require("jsonwebtoken")
const clave = "muydificil123@d"
const generarToken = (user) => {
    const claveSecreta = clave;
    const token = jwt.sign({user: user}, claveSecreta, {expiresIn:"1"})
    return token;
}

module.exports = {
    generarToken
}