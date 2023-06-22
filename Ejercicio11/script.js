/*11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un 
vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de 
litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/

let tipoCoche;
let precioKm;
let kmRecorridos;
let litros;
let costoTotalV;

tipoCoche= prompt("cual es tu tipo de vehiculo?");
if(tipoCoche.toLowerCase()=="coche"){
    precioKm= 0.2

}
else if(tipoCoche.toLowerCase()=="moto"){
    precioKm= 0.1
    
}
else if(tipoCoche.toLowerCase()=="autobus"){
    precioKm= 0.5
    
}
kmRecorridos= prompt("Cuantos kilometros ha recorrido?");
costoTotalV= precioKm*kmRecorridos;
litros= prompt("Cuantos litros ha consumido?");

if (litros>=0 && litros<=100){
    costoTotalV= costoTotalV+5;
}
else{
    costoTotalV= costoTotalV+10;
}
alert("El costo total es "+ costoTotalV);