import { Point } from "./point";


let myPoint = new Point(3, 4)
let punto2 = new Point(10,10)

myPoint.setX(10);

myPoint.setY(10)

myPoint.getX();

myPoint.getY();

myPoint.toString();

myPoint.distanceTolOrigin();




console.log(myPoint.getX());

console.log(myPoint.getY());


console.log(myPoint.toString());

console.log(myPoint.distanceTolOrigin());


console.log(myPoint.calculateDistance(punto2));