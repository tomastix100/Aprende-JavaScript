/* While */
let contador = 0;

while(contador < 5){
    console.log('a')
    contador++
}

/* Do While */
do{
    console.log(contador+1  )
    contador++
}while(contador < 10)

/* FOR */
let frutas = ['manzana', 'pera', 'banano', 'zapote']
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
}

console.log('-  -   -   -   -')

let datos = {
    nombre:'tomas',
    apellido:'escobar',
    numero_cel:'3135673141'
}

// FOR EACH

for(const elemento in frutas){
    console.log(elemento);
}

for(const elemento in frutas){
    console.log(frutas[elemento]);
}

for(const propiedad in datos){
    console.log(`Llave ${propiedad} -> propiedad ${datos.propiedad}.`);
}
