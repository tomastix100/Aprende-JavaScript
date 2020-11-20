let nombre = 'copito',
  edad = 2;

/* Antigua forma de declarar y asignar variables */
const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("Guaaa Guaaa !!");
    }
}

/* TODO: Nueva forma de declarar y asignar variables */
const dog = {
  nombre,
  edad,
  raza: 'callejero',
  ladrar(){
    console.log("Guaaa Guaaa !!");
  }
}

dog.ladrar()
