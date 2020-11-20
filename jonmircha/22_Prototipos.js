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

/* TODO: Antes de ECMAScript 6 Función Constructora*/
function Animal(nombre, genero) {
    //Atrivutos
    this.nombre = nombre;
    this.genero = genero;
    //Metodos
    this.sonar = function () {
        console.log('Hago sonidos porque estoy vivo.');
    }
}

const copito = new Animal('copito', 'perro'),
      manchas = new Animal('manchas', 'gata')


console.log(copito);
console.log(manchas);

/* TODO: Ahora con ECMAScript 6 */
