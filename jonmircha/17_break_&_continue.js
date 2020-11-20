
const list_numeros = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

for (let index = 0; index < list_numeros.length; index++) {
    console.log(list_numeros[index])
    if (index === 5) {
        break;
    }
}

console.log(' ==> ')

for (let index = 0; index < list_numeros.length; index++) {
    console.log(list_numeros[index])
    if (index === 5) {
        continue;
    }
}
