// Concatenación

let nombre = 'tomas'
let apellido = 'escobar'
let saludo = '! Hola ¡ tu nombre es :' + nombre + ' ' + apellido

// Interpolación de variables: Template String
let saludo2 = `Hola mi nombre es ${nombre} ${apellido.toUpperCase()}`
console.log(saludo2)

let ul = `
    <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
    </ul>
`

console.log(ul)
