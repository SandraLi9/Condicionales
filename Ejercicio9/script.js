/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida
 marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará 
“no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

let topping = prompt("¿Que Helado Deseas?");
let helado = 50;
let precio = helado;


if (topping == "oreo") {
    precio = precio + 10
    alert("el precio del helado es " + precio);
}
else if (topping == "kitkat") {
    precio = precio + 15
    alert("el precio del helado es " + precio);
}
else if (topping == "brownie") {
    precio = precio + 20
    alert("el precio del helado es " + precio);
}
else {
    alert("no tenemos este topping, lo sentimos");
    alert("el precio del helado es " + helado);
}