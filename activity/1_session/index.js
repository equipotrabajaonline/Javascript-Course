// Ejercicio 1
import  { getPresentacion }  from './aboutme.js'

console.log(getPresentacion());


console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
// Crear el arrayNumeros con un bucle for con los números del 1 al 100
let arrayNumeros = [];
for (let i = 1; i <= 100; i++) {
    arrayNumeros.push(i);
}

// Recorrer el arrayNumeros con for in y comprobar si el número es divisible por 7 con el operador de comparación ===
for (let indice in arrayNumeros) {
    let numero = arrayNumeros[indice];
    if (numero % 7 === 0) {
        //imprime solo los que son divisibles exacto para 7
        console.log(numero); 
    }
}
// Ejercicio 5

// Ejercicio 6
// Crea un objeto formatter y se le asigan el primer atributo prefix, 
//y luego mediante método se añade mediante append un parámetro que se concatena con el prefix
let formatter = {
    prefix:"Hello ",
    append: function(parametro){
        console.log(this.prefix+parametro);
    }
}
 //prueba de método append
formatter.append("Clase FullStack ");  // Hello Clase FullStack


//Añadir el método toLowerString al prototipo de formatter
// formatter.prototype.toLowerString = function(parametroTexto) {
//     // Imprimir la cadena en minúsculas usando el método toLowerCase()
//     console.log(parametroTexto.toLowerCase());
// };

// formatter.toLowerString("I'm Lucas"); 
