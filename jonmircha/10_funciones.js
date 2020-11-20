
function saludar(nombre="desconocido", edad=0){
  console.log(`!Hola ¡ ${nombre} tu tienes ${edad} años.`)
}
saludar('Tomas Escobar',22)
saludar()

// TODO: HOISTING
// Las funciones para el navegador son de tipo
// global por eso es que se puede llamar a una 
// función antes de que el compilador la reconosca
 

// Así se Declara una función como Funcion declarada
suma(3,4)

function suma(a, b){
    console.log(`La suma de ${a} + ${b} es : ${a+b}`)
}

suma(3,4)



// Esto es una Función Expresada.

// Cuando es una función expresada no se la puede llamar antes de
// declararla

//funcionExpresada()

const funcionExpresada = function(){
    console.log('Está es una funcion expresada, es decir que se le ha asignado como valor a un avariable')
}

funcionExpresada()
