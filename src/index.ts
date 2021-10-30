/*let mes = Number(prompt("Ingrese el numero del mes"));

switch (mes) {
  case 1:
    console.log("Enero 31");
    break;
  case 2:
    console.log("Febrero 28");
    break;
  case 3:
    console.log("Marzo 31");
    break;
  case 4:
    console.log("Abril 30");
    break;
  case 5:
    console.log("Mayo 31");
    break;
  case 6:
    console.log("Junio 30");
    break;
  case 7:
    console.log("Julio 31");
    break;
  case 8:
    console.log("Agosto 31");
    break;
  case 9:
    console.log("Septiembre 30");
    break;
  case 10:
    console.log("Octubre 31");
    break;
  case 11:
    console.log("Noviembre 30");
    break;
  case 12:
    console.log("Diciembre 31");
    break;
  default:
    console.log("no existe ese mes")
}*/

/*let bucle: number = 1;
let suma = 0;

while (bucle <= 10) {
  //let numero = Number(prompt("Ingrese un Numero del 1 al 10"));
  suma = suma + numero;
  bucle = bucle + 1;
  console.log("el resultado es " + suma);
}*/

let letras = prompt("Ingrese una A,B,C O D");
let A: string;

if (letras === A) {
  console.log("el resultado es: ", +tablaDelNueve());
} else {
  console.log("ingrese otra letra");
}

function tablaDelNueve() {
  let multiplos = 9;
  for (let contador: number = 1; contador <= 90; contador + 9) {
    multiplos += multiplos;
  }
  console.log(multiplos);
}
