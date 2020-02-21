/*1. Se requiere un algoritmo para obtener la edad promedio de un grupo de N alumnos. Si algún alumno tiene más de 18 años, se muestra el promedio que se lleva sin contar el alumno de 18 años. EL usuario decide si desea cerrar el programa o vuelve a ejecutarlo.



3. Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas, cuyo número de miembros se desconoce, el ciclo debe efectuarse siempre y cuando se tenga una estatura registrada.

4. Se requiere un algoritmo para determinar, de N cantidades, cuántas son menores o iguales a cero y cuántas mayores a cero.

5. Realice un algoritmo para generar e imprimir los números pares e impares que se encuentran entre 0 y 100. Además muestre la multiplicación de todos estos.

6. Realice un algoritmo para generar N elementos de la sucesión de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13,…).
*/

alert("Ejercicio # 1");


let edadProm=0; // let es para crear una variable global
let N=0; // cantidad de estudiantes mayores de 18
let edad=0;
let acumulador=0;  // aacumulador de promedio
let opcion=0; // control de ciclos

while(opcion!=2)
{

    while(edad<18)
    {
        edad=parseInt(prompt("Ingrese Su Edad"));  // parseInt combierte texto en numero entero 
        
        if(edad<18){
            acumulador += edad;
            N++;
        }else{
            edadProm=acumulador/N;
            console.log("La Edad pormedio es =  "+edadProm);//imprime en modo desarrollo
            alert("La Edad pormedio es =  "+edadProm);//muestra ventana de mensaje
        }
        
        
    }

    opcion=prompt("desea terminar, digite: 2");
 
}

