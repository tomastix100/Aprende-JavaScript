/* 
  Está es una variable de tipo global,
  solo se declara si la necesito utilizar
  en todo el codigo
*/
var hola = "Tomas Jesus Escobar Cueltan"


if(true){
    /* 
    Las variables de tipo bloque o de ambito local,
    solo de claran de está forma, crearlas con VAR,
    es una mala practica ya que si se declaran con var,
    automaticamente el navegador la coloca como de
    alcance global y a la larga eso es malo y mal echo */
    let hello = 'Universidad del Cauca - Colombia'
    console.log(hello)
}


// TODO: Ejemplo de porque NO se deb colocar VAR a las variables de tipo LOCAL ó BLOQUE

var musica = 'rock'
console.log('Variable música antes del bloque => ',musica)

{
  var musica = 'clasica'
  //var musica = 'clasica'
  console.log('Variable música dentro del bloque => ',musica)
}

console.log('Variable música después del bloque => ',musica)


// TODO: Como se debe declarar las variables 

let automovil = 'Toyota'
console.log('Variable automovil antes del bloque => ',automovil)

{
  let automovil = 'Bugatti'
  //var musica = 'clasica'
  console.log('Variable automovil dentro del bloque => ',automovil)
}

console.log('Variable automovil después del bloque => ',automovil)
