
function Validate(input) {
  let error = {};
  let regExpSoloLetters = /[^a-zA-Z\s]/g;
  const repetidos = (array)=> new Set(array).size!==array.length //false
  if (!input.nombre.trim()) {
    error.nombre = 'Se requiere un nombre';
  } else if (regExpSoloLetters.test(input.nombre)) {
    error.nombre = 'Ingresar solo letras';
  }

  if (!input.dificultad) {
    error.dificultad = 'Se requiere una dificultad';
  }

  if (!input.duracion || input.duracion > 24) {
    error.duracion = 'Se requiere una duración máxima de 24hs';
  } else if (input.duracion < 1) {
    error.duracion = 'No se permiten números menores a 1';
  }

  if (!input.temporada) {
    error.temporada = 'Se requiere una temporada';
  }

  if (!input.country[0]) {
    error.country = 'Se requiere seleccionar un país';
  }
  if(repetidos(input.country)){
    error.country = 'No se permiten paises duplicados'
  }

  return error;
}

export default Validate;
