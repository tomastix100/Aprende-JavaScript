let nombre = 'Tomas Jesus Escobar Cueltan'

console.log(nombre)

let universidad = new String('Universidad del Cauca')

console.log(universidad)

console.log(`Tamano nombre : ${nombre.length}`)

let parrafo = 'Cuenta la leyenda que existia una dinastia de patos pateros'

console.log(`Parrafo en mayuscula => ${parrafo.toUpperCase()}`)

console.log(`Parrafo en miniscula => ${parrafo.toLowerCase()}`)

// Buscar palabra en una variable

let lorem = '     Una de las compañias mas grandes del mundo como lo es spacex, está buscando ingenieros que quieran hacer parte de la compañia spacex.  '

let encontro = lorem.includes('spacex')
console.log(encontro)

// Este metodo eleimina espacios sobrantes al inicio y final de una cadena
let new_lorem = lorem.trim()
console.log(new_lorem)

// convertir cadena en vector, segun el separador que queramos
let cadena_nombre = 'tomas jesus escobar cueltan'
let vector_nombre = cadena_nombre.split(' ')
console.log(vector_nombre)
