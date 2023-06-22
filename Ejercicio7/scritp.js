//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
/*otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día 
ingresado no es ninguno de esos, imprimir otro mensaje.*/

let DiaDeLaSemana = prompt("Ingresa Un Dia De La Semana")

if (DiaDeLaSemana === "lunes") {
    alert("Comienza La Semana Con Toda La Actitud 🌤️")
}

else if (DiaDeLaSemana === "viernes") {
    alert("Es Viernes Y El Cuerpo Lo Sabe 💃🏻🕺🏻")
}
else if (DiaDeLaSemana === "sabado") {
    alert("Disfruta De Tu Fin De Semana 😎")
}
else if (DiaDeLaSemana === "domingo") {
    alert("Deja Todo Preparado Para La Semana 👀")
}

else {
    alert ("Por Favor Ingrese Un Dia Valido")
}

