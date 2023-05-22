// Ejercicio 1
// Crear Objeto mediante un constructor con 4 parámetros

function PersonaObjConstr(nombre, edad, sexo, estCivil) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;
  this.estCivil = estCivil
}

// Crea el objeto personaObj1 
let personaObj1 = new PersonaObjConstr("Pedro", 45, "hombre", "casado");
console.log(personaObj1);

// Se crea el arrayDatos del objeto y se recoge los valores 
let arrayDatos = Object.keys(personaObj1).map(function (key) {
  return key, personaObj1[key];
});

// Se imprime en pantalla los valores del array
console.log(arrayDatos);


/////////////////////////////////////////////////////////////////////////////

// Ejercicio 2

// Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno.

//Repuesta: dependiendo del contexto en el que sea invocado 
// En un método refiriendo al propio objeto 
let yo = {
  nombre: "Pedro", 
  edad: 34, 
  estCivil : "casado", 
  estado: function () {
    console.log(this.estCivil);
   }};

yo.estado(); // devuelve el estado civil del objeto

// Solo - refiriéndose al contexto global
console.log(this.document === document); //

// En una función también refiriéndose al contexto global
function f1(){ return this; }
		f1() === window; //objeto global 

// En llamadas de event Handlers refiriendos al Elemento de Html que recibe el evento
<button class="custom-button button-cancel" id="loginFailure" onclick="this.style.display = ‘none’">Click borrar </button>


// ¿Qué diferencias hay entre las arrow functions y las function expressions?

// las funciones de flecha no tienen this. Si se accede a this, se toma el contexto del exterior.
// Las funciones de flecha tampoco tienen variable arguments.
// No se pueden llamar con new y tampoco tienen super.
// Están diseñadas para piezas cortas de código que no tienen su propio “contexto”, sino que funcionan en el actual


/////////////////////////////////////////////////////////////////////////////
// Ejercicio 3

// Crea una clase a la que llamaremos "InvertirCadena" con las siguientes propiedades:
// Un atributo llamado cadenaInvertir que sea una cadena vacía.
// Una función en formato arrow function, que tome el atributo cadenaInvertir e imprima en pantalla el resultado invertido. Ej "Hola mundo" quedaría "odnum aloH".
// Si el parámetro de la cadena cadenaInvertir es vacío, lance un error (throw). Ej. "". throw error.
// Ahora instancia la clase en un objeto que llamaremos invertirCadena.
// Definir la clase InvertirCadena
class InvertirCadena {
  // Crear un constructor que recibe el parámetro cadenaInvertir
  constructor(cadenaInvertir) {
    this.cadenaInvertir = cadenaInvertir;
  }

  // Definir el método invertirCadena que toma el parámetro cadenaInvertir y devuelve el resultado invertido
  invertirCadena = (cadenaInvertir) => {
    // Si el parámetro es una cadena vacía, lanzar un error
    if (cadenaInvertir === "") {
      throw new Error("La cadena no puede ser vacía");
    }
    // Si no, devolver el resultado invertido
    return cadenaInvertir.split("").reverse().join("");
  };
}

// Instanciar la clase en un objeto que se llama invertirCadenaOk con el valor "Hola Mundo"
let invertirCadenaOk = new InvertirCadena("HOLA Mundo");


// Llamar al método invertirCadena del objeto con el atributo cadenaInvertir y mostrar el resultado en pantalla
try {
  console.log(invertirCadenaOk.invertirCadena(invertirCadenaOk.cadenaInvertir));
} catch (error) {
  // Si hay un error, mostrar el mensaje del error
  console.log(error.message);
}


/////////////////////////////////////////////////////////////////////////////


// Ejercicio 4

// Crea una clase con el formato ES6. Esta clase va a tener dos atributos, 
// username y password y un método login() que compruebe que username tiene 
// el valor admin y password el valor passwd y en caso positivo, lance una 
//alerta diciendo que el usuario esté logeado, en caso contrario, que diga 
// que el usuario o la contraseña son incorrectas. Siendo que:


//Creamos la clase AccLogin con parametros user1 y pass
class AccLogin {
  constructor(user1, pass) {
    this.user1 = user1;
    this.pass = pass;
  }
  // esta función compara si el user es 'admin' y el password es  'passwd'
  loginOk = () => {
    if (this.user1 === "admin" && this.pass === "passwd") {
      console.log("usuario logueado");  //Si es correcto muestra 
    } else {
      console.log("usuario o password erróneo");
    }
  }
}

// Se crea instancia login con los datos correctos
let login = new AccLogin('admin', 'passwd') // alert -> User logged in

login.loginOk();

// se crea instancia login con los datos errónoes
let logbad = new AccLogin('pepe', 'bad') // alert -> User or passwd incorrect

logbad.loginOk();


/////////////////////////////////////////////////////////////////////////////

// Ejercicio 5

// Crea dos clickListener, para los botones con id loginSuccess y loginFailure. 
// En el primero crearemos un objeto login que sea correcto y llamaremos a la 
// función para que de el resultado correcto. En el segundo crearemos un objeto 
// login con parámetros incorrectos y llamaremos a login para que falle. 


class LoginWeb {
  constructor(param1_web) {
    this.param1_web = param1_web;
  }
  loginOk2 = () => {
    if (this.param1_web === 'ok1') {
      window.alert("login ok");

    } else {
      window.alert("login bad");
    }
  }
}

function verifLogin(param1) {
  let loginWeb_fin = new LoginWeb(param1);
  return loginWeb_fin.loginOk2();

}


// Ejercicio 6

// Crea dos clickListener, para los botones con id loginSuccessAsync y loginFailureAsync. 
// En el primero llamaremos a la función loginWitUsername para que de el resultado correcto. 
// En el segundo llamaremos a la función con parámetros incorrectos. Os dejo un par de pistas para resolver el ejercicio.

// Primero, addEventListener('click', () => {}) no acepta asincronía ya que es una función síncrona. 
// Pero es posible sustituir el segundo argumento () => {} que es una función, por una función asíncrona 
// (solo habría que añadir una palabra reservada).

// loginWithUsername devuelve una promesa, que lanza una excepción si falla, 
// por lo que habría que atrapar esa excepción para que nuestro programa no falle.



// Definir la función loginWitUsername que recibe dos parámetros username y password y devuelve una promesa que se resuelve o se rechaza según los valores de los parámetros


function loginWitUsername(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "ok2" && password === "pwd") {
        resolve('User logged in');
      }
      else {
        reject('Error invalid username or password');
      }
    }, 200);
  });
}

// Obtener los elementos del DOM con los id loginSuccessAsync y loginFailureAsync
let loginSuccessAsync = document.getElementById("loginSuccessAsync");
let loginFailureAsync = document.getElementById("loginFailureAsync");

// Creamos la función  loginSuccessAsync que invoca a la función loginWitUsername 
// con los parámetros indicados y muestra el resultado en una alert
loginSuccessAsync.addEventListener("click", () => {
  loginWitUsername('ok2', 'pwd')
    .then(
      (result) => { alert(result); }// User logged in
    )
    .catch(
      (error) => { alert(error); }
    );
});

// Creamos la función  loginFailureAsync que invoca a la función loginWitUsername 
// con los parámetros indicados y muestra el resultado en una alert
loginFailureAsync.addEventListener("click", () => {
  loginWitUsername('bad', 'badPwd')
    .then(
      (result) => { alert(result); } // User logged in  
    )
    .catch(
      (error) => { alert(error); }
    );
});



