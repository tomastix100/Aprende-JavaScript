let numeros = [1,2,3]

let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2]

console.log(uno, dos, tres);


/* Destructuración  */
let str_numeros = ['uno', 'dos', 'tres']
const [one, two, three] = str_numeros;
console.log(one, two, three);


const persona = {
  nombre:'Thomas',
  apellido:'Escobar',
  edad:22
}

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);
