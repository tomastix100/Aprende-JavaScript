/* TODO: POO 
* Clases - Modelo a seguir
* Objetos - Es una instancia de una clase
  * Atributos - Caracteristica o propiedad
  * Métodos - Acciones que un objeto puede realizar
*/

/* TODO: Esto se remplaza por los prototipos 
const animal = {
    nombre: 'Copito',
    sonar(){
        console.log('Wua Wua Wua');
    }
}

const animal2 = {
    nombre: 'Manchas',
    sonar(){
        console.log('Miau Miau Miau');
    }
}

console.log(animal);
console.log(animal2);
*/

/* TODO: Prototipos -> Funcion Constructura*/

/* TODO: Antes de ECMAScript 6 Función Constructora version #1
function Animal(nombre, genero) {
    //Atrivutos
    this.nombre = nombre;
    this.genero = genero;
    //Metodos
    this.sonar = function () {
        console.log('Hago sonidos porque estoy vivo.');
    }

    this.saludar = function () {
        console.log(`Hola soy !${this.nombre}¡`);
    }
}
*/

/* TODO: Antes de ECMAScript 6 Función Constructora version #2 */
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

const copito = new Animal('copito', 'perro'),
      manchas = new Animal('manchas', 'gata')
console.log(copito);
console.log(manchas);


copito.saludar();
manchas.saludar();


/* TODO: Ahora con ECMAScript 6 */
