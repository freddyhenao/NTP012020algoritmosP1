/* 2. Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo for.*/


let cantidad=0; // let es para crear una variable global
let total=0; // cantidad total
var i 

for (i=1;i<=10;i++) { 
    cantidad=parseInt(prompt("Ingrese cantidad a sumar " +i));  // parseInt combierte texto en numero entero 
    total=cantidad+total;
   	
}
alert("La Cantidad total es =  "+total);//muestra ventana de mensaje

