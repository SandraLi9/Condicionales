//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
//Considerar el caso en que 2 números sean iguales.

let Numero1 = parseInt(prompt("Ingresa El Numero Uno"));
let Numero2 = parseInt(prompt("Ingresa El Numero Dos"));
let Numero3 = parseInt(prompt("Ingresa El Numero Tres"));

if (Numero1 > Numero2 && Numero1 > Numero3) {
    alert(`el numero menor es ${Numero1}`)
}
else if (Numero2 > Numero1 && Numero2 > Numero3) {
    alert(`el numero mayor es ${Numero2}`)
}
else if (Numero3 > Numero1 && Numero3 > Numero2) {
    alert(`el numero mayor es ${Numero3}`)
}
else {
    alert("Hay Dos Numeros Con El Mismo Valor");
}
