
/* Parametros REST */
function sumar(a, b, ...c){
    let resultado = a + b;
    c.forEach(function (n) {
        resultado += n
    });
    return resultado
}

console.log(sumar(1 , 2));
console.log(sumar(1 , 2, 3));
console.log(sumar(1 , 2, 3, 4));
console.log(sumar(1 , 2, 3, 4, 5));
console.log(sumar(1 , 2, 3, 4, 5, 6));

/* Operador de PROPAGACIÓN */
const array1 = [1,2,3,4,5],
    array2 = [5,4,3,2,1]
console.log(array1, array2);

// Cuando se quiere agregar de una todos los conponentes de un objeto
const array3 = [9,8,7,6,...array1, ...array2]
console.log(array3)
