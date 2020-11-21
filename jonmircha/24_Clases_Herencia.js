class Animal{
    constructor(nombre, genero, tamanio, edad){
        this.nombre = nombre;
        this.genero = genero;
        this.tamanio = tamanio;
        this.edad = edad;
    }

    informacion(){
        return `Nombre: ${this.nombre}, Genero: ${this.genero}, Tamanio: ${this.tamanio}, Edad: ${this.edad} anio.`; 
    }
}

const horus = new Animal('horus','macho','pequeño',1),
    morocho = new Animal('morocho','macho','mediano',1);

//console.log(horus.informacion());
//console.log(morocho.informacion());

/* TODO: Herencia  */
class Perro extends Animal{
    constructor(nombre, genero, tamanio, edad, especie){
        super(nombre, genero, tamanio, edad);
        this.especie = especie;
    }

    sonido(){
        console.log(`Hola soy ${this.nombre} y soy un Perro`);
    }
}


const copito = new Perro('copito','macho','mediano',2,'caninos.')
console.log(copito);
