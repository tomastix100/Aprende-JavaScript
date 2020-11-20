const arreglo = ['perro', 'gato', 'caballo', 'ardilla']

console.log(arreglo)
console.log(`Tamño : ${arreglo.length}`)
console.log(`Objeto en posición : ${arreglo[3]}`)

// Asignar valores por defecto a un vector
const vector = Array(10).fill(false)
console.log(vector)

const colores = ['rojo', 'verde', 'azul'] 
colores.push('negro') // Agregar al final del vector
colores.pop() // Quitar ultimo elemento
console.log(colores)

//  Recorrer un vector con una funcion "forEach"
colores.forEach(function(el,index){
    console.log(`<li id ="${index}">${el}</li>`)
});
