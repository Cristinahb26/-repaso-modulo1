import { triangle } from "./triangle";
import { Point } from "./point";


let vertex1 = new Point(0,0);
let vertex2 = new Point(0,6);
let vertex3 = new Point(6,0);

let myTriangle  = new triangle(vertex1, vertex2, vertex3);

console.log(myTriangle.calculateLengthSides());