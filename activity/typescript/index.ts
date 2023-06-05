// Ejercicio 1
// Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'. 
// Ahora define una arrow function que tenga como parámetro esta interfaz y que devuelva 
// un array con el valor de sus propiedades, esta función tiene 
// que tener tipado el parámetro de entrada y el return.
// Ayuda -> El array probablemente necesite union type 
// input name -> Lucas / age -> 28 / profession -> Full Stack
// return -> ["Lucas", 28, "profession"] 

// Se crea la interfaz Persona con los 3 atributos: nombre edad profesión
interface Persona {
    name: string;
    age: number;
    profession: string;
  }
  
//Obtenemos el array que devuelve los datos de person
  const getPersonProperties = (person: Persona): (string | number)[] => {
    return [person.name, person.age, person.profession];
  }
  

  // Instanciamos en una nueva variable persona1
  const persona1: Persona = {
    name: "Lucas",
    age: 28,
    profession: "Full Stack"
  };
  
// construimos el datosArray con los datos de getPersonProperties y con persona1 como parámetro
  const datosArray: (string | number)[] = getPersonProperties(persona1);
  console.log(datosArray); // ["Lucas", 28, "Full Stack"]


// Ejercicio 2

// Escribe una función llamada sumOrConcatenate que acepte dos parámetros. 
// Cada uno de estos parámetros podrá ser de tipo number o string. 
// La función devolverá una suma si los dos parámetros son números, 
// una concatenación con el símbolo `-` si son los dos `strings` o 
// una cadena concatenadad con `:` si uno es un number y el otro string.
// console.log(sumOrConcatenate(4, 3)); // --> 7
// console.log(sumOrConcatenate(4, "hello")); // --> 4:hello 
// console.log(sumOrConcatenate("hello", "world")); // --> hello-world

function sumaOrConcatenate(valor1: number | string, valor2: number | string): number | string {
    if (typeof valor1 === 'number' && typeof valor2 === 'number') {

      return valor1 + valor2;

    } else if (typeof valor1 === 'string' && typeof valor2 === 'string') {

      return valor1 + '-' + valor2;

    } else {

      return valor1 + ':' + valor2;
    }
  }
  
  console.log(sumaOrConcatenate(4, 3)); // --> 7
  console.log(sumaOrConcatenate(4, "hello")); // --> 4:hello 
  console.log(sumaOrConcatenate("hello", "world")); // --> hello-world
  

// Ejercicio 3


// •	Crea dos interfaces, una llamada `Car` y otra `Motorcycle`. 
//      La primera tendrá las propiedades `tires` (number), 
//      `turnOnEngine()` (función que devuelve void) y 
//      `pressPedal()` (función que devuelve void).
// •	La segunda tendrá las propiedades `tires` (number), 
//      `turnOnEngine()` (función que devuelve void) y 
//      `openThrottle()` (función que devuelve void).
// •	Escribe una función que acepte un parámetro que 
//      pueda ser `Car` o `Motorcycle` que, primero llame a 
//      turnOnEngine, y luego si es Car llame a pressPedal 
//      pero si es Motorcycle llame a openThrottle().
// •	Para la comprobación no valdrá `typeof`, 
//      necesitaremos hacer uso de type predicates





interface Car {
    tires: number;
    turnOnEngine(): void;
    pressPedal(): void;
  }
  
  interface Motorcycle {
    tires: number;
    turnOnEngine(): void;
    openThrottle(): void;
  }
  
  //Funcion arrancar que recibe como parámentro Car o Motorcicle 
  function arrancar(vehicle: Car | Motorcycle): void {

    //primero llama a turnOnEngine() 
        vehicle.turnOnEngine();

    //Verifica que tenga la propiedad pressPedal o openThrottle 
    // y en caso de que no la tenga lanza un mensaje en consola
    if ('pressPedal' in vehicle) {
        vehicle.pressPedal();
    } else if ('openThrottle' in vehicle){
        vehicle.openThrottle();
    } else {
        console.log("no es este tipo de vehículo")
    }
  }
  


// Ejercicio 4

//uso de la función slice para remover el priimer elemento 
function removerPrimerElemento<T>(array: T[]): T[] {
    return array.slice(1);
  }
  
  const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
  const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  const mixedArray: Array<number|string> = ['Hello', 'I', 'have', 3, 'tasks'];
  const unsupportedArray = [{name: 'Lucas', surname: 'Fernandez'}, 'Hello', 22];
  
  const newStrArray = removerPrimerElemento(strArray);
  const newNumArray = removerPrimerElemento(numArray);
  const newMixedArray = removerPrimerElemento(mixedArray);
  //error
  const newUnsupportedArray = removerPrimerElemento(unsupportedArray); 
  
  console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
  console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
  console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
  