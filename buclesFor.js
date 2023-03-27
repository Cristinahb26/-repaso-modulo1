"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
// evenNumbers(9);
function myRevert(myArr) {
    var nombre = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        nombre.push(myArr[i]);
    }
    return nombre;
}
// console.log(myRevert("regresar"));
function isRainbow(colors) {
    var Colors = ["rojo", "amarillo", "azul", "verde", "violeta", "naranja"];
    for (var i = 0; i < Colors.length; i++) {
        if (Colors[i] == colors) {
            console.log("esta en el arcoiris");
        }
        else {
            console.log("no esta en el arcoiris");
        }
    }
}
// isRainbow("naranja");
function add(myWords) {
    var suma = 0;
    for (var i = 0; i < myWords.length; i++) {
        suma += myWords[i].length;
    }
    return suma;
}
exports.add = add;
// console.log(add ('concentracion'));
