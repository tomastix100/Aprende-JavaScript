try {
  noexiste;
  console.log(`Todo salio muy bien`)
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`)
} finally {
  console.log(`El programa finalizo #1`)
}

try {
  let numero = 'sd'
  if(isNaN(numero)){
    throw new Error("El caracter introducido no es un número")
  }
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`)
} finally {
  console.log(`El programa finalizo #2`)
}
