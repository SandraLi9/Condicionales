//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los
//dos es menor. No considerar el caso en que ambos números son iguales.

let Numero1 = parseInt(prompt("Ingresa El Numero Uno"));
let Numero2 = parseInt(prompt("Ingresa El Numero Dos"));

if (Numero1 < Numero2) {
    alert(`el numero menor es ${Numero1}`)
}
else if (Numero1 > Numero2) {
    alert(`el numero menor es ${Numero2}`)
}
