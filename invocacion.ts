import { isEven } from "./condicionales";
import { add } from "./buclesFor";



let array = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
let array1 = ['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil'];
let array2= ['Venezuela', 'Veneno', 'Voltaje'];



let sum1 = array.reduce((acumulacion, array) => acumulacion + add(array), 0);
console.log(`La suma de los caracteres del array es ${sum1}, y es ${isEven(sum1) ? 'par' : 'impar'}.`);

let sum2 =  array1.reduce((acumulacion, array1) => acumulacion + add(array1), 0);
console.log(`La suma de los caracteres del array1 es ${sum2}, y es ${isEven(sum2) ? 'par' : 'impar'}. `);


let sum3 = array2.reduce((acumulacion, array2) => acumulacion + add(array2), 0);
console.log(`La suma de los caracteres del array2 es ${sum3}, y es ${isEven(sum3) ? 'par' : 'impar'}. `);





