/*10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. 
Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción 
elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido,
 tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */

let programa = prompt ("Que Carrera Quieres Estudiar? \n\ 1. Course \n\ 2. Carrera \n\ 3. Master");
let costoTotal;
let costoMes;
let beca;
let nombreBeca;
if (programa.toLowerCase() == "course") {
    costoMes = 4999
    costoTotal = costoMes * 2
    beca = prompt("¿Tienes alguna beca?");
}
else if (programa.toLowerCase() == "carrera") {
    costoMes = 3999
    costoTotal = costoMes * 6
    beca = prompt("¿Tienes alguna beca?");
}
else if (programa.toLowerCase() == "master") {
    costoMes = 2999
    costoTotal = costoMes * 12
    beca = prompt("¿Tienes alguna beca?");

}

if (beca.toLocaleLowerCase() == "si") {

    nombreBeca = prompt ("Tienes Alguna Beca? \n\ 4. Facebook \n\ 5. Google \n\ 6. Jesua");
  
    if (nombreBeca.toLowerCase() == "facebook") {
        costoMes = costoMes * 0.8;
        costoTotal = costoTotal * 0.8;
        
    }
    else if (nombreBeca.toLowerCase() == "google") {
        costoTotal = costoTotal * 0.85;
        costoMes = costoMes * 0.85;
    }
    else if (nombreBeca.toLowerCase() == "jesua") {
        costoTotal = costoTotal * 0.5;
        costoMes = costoMes * 0.5;
    }
}

alert("El costo mensual con descuento es " + costoMes + " y el costo total del curso es " + costoTotal)
