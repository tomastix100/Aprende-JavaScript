// IF ELSE

let edad = 22

if(edad > 17){
  console.log("Eres mayor de edad.")
} else {
  console.log("Eres menor de edad.")
}

// ELSE IF
let hora_dia = 17

if(hora_dia > 18){
  console.log("! Buenas noches ¡")
}else if(hora_dia > 12){
  console.log("! Buenas tardes ¡")
}else{
    console.log("! Buenos dias ¡")
}


/* Operador Ternario */
let eresMayor = (edad >=18)
 ? "Eres mayor de edad." 
 : "Eres menor de edad."
console.log(eresMayor)


/* SWITCH - CASE */
let dia_semana = 2

switch (5){
    case 1: 
      console.log("! Hoy es lunes ¡")
      break;
    case 2: 
      console.log("! Hoy es martes ¡")
      break;
    case 3: 
      console.log("! Hoy es miercoles ¡")
      break;
    case 4: 
      console.log("! Hoy es jueves ¡")
      break; 
    case 5: 
      console.log("! Hoy es viernes ¡")
      break; 
    default:
      console.log("! No es dia de la semana. ¡")
      break;

}
