"use strict";
console.log("----- Ej 1 -------");
const listProperties = (person) => {
    //return Object.values(person);
    return Object.keys(person).map((element) => person[element]);
};
const paco = {
    name: "Paco",
    age: 45,
    profession: "Architect"
};
console.log(listProperties(paco));
console.log("----- Ej 2 -------");
const sumOrConcatenate = (value1, value2) => {
    if (typeof value1 === "string" && typeof value2 === "string") {
        return `${value1}-${value2}`;
    }
    else if (typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    }
    else {
        return `${value1}+${value2}`;
    }
};
console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello 
console.log(sumOrConcatenate("hello", 4)); // 4+hello 
console.log(sumOrConcatenate("hello", "world")); //hello-world
console.log("----- Ej 3 -------");
function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
function isMotorcycle(vehicle) {
    return vehicle.openThrottle !== undefined;
}
function drive(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else if (isMotorcycle(vehicle)) {
        vehicle.openThrottle();
    }
    else {
        vehicle.break();
    }
}
console.log("----- Ej 4 -------");
function removeFirstEntry(arr) {
    return arr.splice(1);
}
const strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray = [1, 2, 3, 4, 5, 6, 7];
const mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
//const newUnsupportedArray = removeFirstEntry(unsupportedArray); // --> will fail
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
