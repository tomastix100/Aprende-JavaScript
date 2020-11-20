const persona ={
    nombre: 'tomas',
    apellido: 'escobar',
    edad: 22,
    pasatiempos: ['bailar', 'programar', 'natación', 'etc'],
    soltero: false,
    contacto:{
        email:'tomasj@unicauca.edu.co',
        facebook:'3135673141',
        twitter:'@tomasorit'
    },
    saludar:function(){
        console.log(`Hola estas en el perfil de ! ${this.nombre} ${this.apellido} ¡ me encuentra en Twitter como ${this.contacto.tuitter}`) 
    }
}

/* Las variables dentro de un objeto se llaman atributos,
   las funciones se llaman metodos */

persona.saludar()
console.log(`Hola ${persona.nombre}, Bienvenido.`)
console.log(persona.contacto.email)
console.log(Object.keys(persona))
console.log(Object.values(persona))
// Saber si un objeto tiene una propiedad
console.log(persona.hasOwnProperty("contacto"))
