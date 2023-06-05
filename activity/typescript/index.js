// Ejercicio 1
// Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. 
// Ahora define una arrow function que tenga como parámetro esta interfaz y que devuelva 
// un array con el valor de sus propiedades, esta función tiene 
// que tener tipado el parámetro de entrada y el return.
// Ayuda -> El array probablemente necesite union type 
// input name -> Lucas / age -> 28 / profession -> Full Stack
// return -> ["Lucas", 28, "profession"] 
var getPersonProperties = function (person) {
    return [person.name, person.age, person.profession];
};
// Ejemplo de uso
var persona1 = {
    name: "Lucas",
    age: 28,
    profession: "Full Stack"
};
var propertiesArray = getPersonProperties(persona1);
console.log(propertiesArray); // ["Lucas", 28, "Full Stack"]
// Ejercicio 2
// Ejercicio 3
// Ejercicio 4
