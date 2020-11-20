
/* Antes */
const saludar01 = function(){
    console.log('Hola me llamo thomas');
}

/* Ahora */
const saludar02 = () => {
    console.log('Hola me llamo thomas');
}

/* Ahora => ESTO SE PUEDE HACER CUANDO SE TIENE TODO: ( UNA SOLO LINEA DE CODIGO )EN LA FUNCIÓN, PARA ESTE CASO */
const saludar03 = () => console.log('Hola me llamo thomas');

const saludo_personal01 = (nombre) => console.log(`Hola ${nombre} como estas ?`);

// Cueando recive UN SOLO parametro
const saludo_personal02 = nombre => console.log(`Hola ${nombre} como estas ?`);

/*
saludar01()
saludo_personal01('Señor Copito')
saludo_personal02('! Manchas  alias la LLORONA ¡')
*/

/* Antes */
const sumar01 = function(a, b){
    return a+b
}

/* Cuando recive 0 mas de UN parametr0 */
const sumar02 = (a,b) => a+b

console.log(sumar02(4,7));

/* Ahora => ESTO SE PUEDE HACER CUANDO SE TIENE TODO: ( MAS DE UNA LINEA DE CODIGO ) EN LA FUNCIÓN, PARA ESTE CASO */
const sumarAnos = (edad_actual) => {
    let edad_con_suma = edad_actual + 10
    console.log(`Ahora tienes ${edad_actual}, dentro de diez años tendras ${edad_con_suma}.`)
}

sumarAnos(22)

/* TODO: ( METODOS UTILILES DE LAS Arrow Functions ) */
const numeros = ['uno', 'dos', 'tres']

/* Antes */
numeros.forEach(function (el, index){
    console.log(`El elemento ${el} está en la posición ${index}`);
});

/* Ahora TODO: ( Arrow Functions )*/
numeros.forEach((el, index) => console.log(`${el} está en la posición ${index}`));

/*
function perro(){
    console.log(this)
}

perro()
 */

/* TODO:  (SI) Respeta el contexto local */
const perro01 = {
    nombre: 'copito',
    ladrar: function(){
        console.log(this)
    },
}

/* TODO: Está forma si respeta el entorno local */
const perro02 = {
    nombre: 'copito',
    ladrar(){
        console.log(this)
    },
}

/* TODO:  Las Arrow Functions (NO) respetan el entorno local OJO*/
const perro03 = {
    nombre: 'copito',
    ladrar: () => console.log(this)
}

perro01.ladrar()
perro02.ladrar()
perro03.ladrar()
