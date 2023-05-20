
function Validate(input) {
    let error= {}
    let regExpSoloLetters = /[^a-zA-Z\s]/g;
    
    if(!input.nombre.trim()){
      error.nombre = 'Se requiere un nombre'
    }else if(regExpSoloLetters.test(input.nombre)){
      error.nombre = 'Ingresar solo letras'  
    }
    if(!input.dificultad){
      error.dificultad = 'Se requiere una dificultad'
    }
    if((!input.duracion || input.duracion>24) && input.duracion > 1){
      error.duracion = 'Se requiere una duración maxima de 24hs '
    }
  
    if(!input.temporada){
      error.temporada = 'Se requiere una temporada'
    }
    if(!input.country[0]){
        error.country = 'Se requiere seleccionar un país'
    }
    return error
  }
  

export default Validate