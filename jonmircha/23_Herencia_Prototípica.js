function Animal(nombre, genero) {
    //Atrivutos
    this.nombre = nombre;
    this.genero = genero;
}

//Metodos agregados al prototipo de la función
Animal.prototype.sonar = function () {
    console.log('Hago sonidos porque estoy vivo.');
}

Animal.prototype.saludar = function () {
    console.log(`Hola soy !${this.nombre}¡`);
}

/* TODO: Herencia Prototípica */
function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

/* Perro está heredando de Animal */
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescribir metodos del prototipo Padre
Perro.prototype.sonar = function () {
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function () {
    console.log("¡ Guaaaao Guaaaao !");
}

const copito = new Perro('copito', 'macho', 'mediano');
copito.ladrar();
