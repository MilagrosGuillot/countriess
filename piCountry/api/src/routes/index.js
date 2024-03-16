const { Router } = require('express');
const routerCountries = require("../handlers/routerCountries")
const routerActivity = require("../handlers/routerActivity")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", routerCountries)
router.use("/activities", routerActivity)

module.exports = router;
