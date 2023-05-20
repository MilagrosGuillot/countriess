
const validate = (state, setErrors,) => {
    let errors = {}
    let regExpSoloLetters = /[^a-zA-Z\s]/g;

    if (!state.nombre.trim()) {
        errors.nombre = 'Se requiere un nombre'
        
    } else if (regExpSoloLetters.test(state.nombre)) {
        setErrors({ ...errors, nombre: "ingresar solo letras" })
    }
    else if (state.nombre.length < 2)
        setErrors({ ...errors, nombre: "Debe tener mas de un caracter" })
    else {
        setErrors({ ...errors, nombre: "" })
    }

    if (state.dificultad === "dificultad"){
        setErrors({ ...errors, dificultad: "se requiere otro campo" })
    }
    else {
        setErrors({ ...errors, dificultad: "" })
    }

    if ((!state.duracion  || state.duracion > 24 ) && (state.duracion > 1)) {
        setErrors({ ...errors, duracion: "se requiere duracion de maximo 24horas" })
    }
    else {
        setErrors({ ...errors, duracion: "" })
    }

    if (!state.temporada) {
        setErrors({ ...errors, temporada: "se requiere temporada" })
    }else if (state.temporada === "temporada"){
        setErrors({ ...errors, temporada: "se requiere otro campo" })
    }
    else {
        setErrors({ ...errors, temporada: "" })
    }
    
    return errors
}

export default validate