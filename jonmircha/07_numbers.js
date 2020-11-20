let i = 3
let f = 3.195

// Redondear numeros, toFixed => cuantos numeros decimales va a tener
// un valor numerico.
console.log(f.toFixed(2))

// Devolver la parte entera de un numero
console.log(parseInt(f))

// Devolver parte flotante con condicion de dos decimales
// despues de la coma
console.log((f - parseInt(f)).toFixed(2))

// Cambios de tipo de dato
console.log(7.19 + parseInt('5.6'))
console.log(7.19 + parseFloat('5.6'))

console.log(7.19 + Number.parseInt('5.6'))
console.log(7.19 + Number.parseFloat('5.6'))
