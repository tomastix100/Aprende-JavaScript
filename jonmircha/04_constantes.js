// Las constantes siempre tienen que inicializarse,
// siempre se crean en MAYUSCULA
const PI = '3.141516'

console.log('PI => ',PI)


/*La palabra const sirve para evitar que  una referencia
 a un objeto, sea referenciada por otro objeto*/ 

const obj = {};
let obj2 = {};
// Error => obj = obj2;
console.log(obj);
// Daría error lo mismo con las matrices


/* La restricción del CONST depende del tipo de dato,
   en este caso no afecta al objeto y al vector ya que
   son valores compuestos*/

const objeto = {
    nombre: 'tomas',
    edad: 22
}

const colores = ['blanco', 'amarillo', 'verde', 'negro']

console.log(objeto)
console.log(colores)

// crear propiedad a los objetos

objeto.correo = 'tomas@gmail.com'
colores.push('anaranjado')

console.log(objeto)
console.log(colores)


/* TODO: para tener en cuenta:

   Valores Primitivos: Se accede directamente al valor.
   Valores Compuestos: Se accede a la referencia del valor.
*/ 
