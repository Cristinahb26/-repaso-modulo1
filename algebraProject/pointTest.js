"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(3, 4);
var punto2 = new point_1.Point(10, 10);
myPoint.setX(10);
myPoint.setY(10);
myPoint.getX();
myPoint.getY();
myPoint.toString();
myPoint.distanceTolOrigin();
console.log(myPoint.getX());
console.log(myPoint.getY());
console.log(myPoint.toString());
console.log(myPoint.distanceTolOrigin());
console.log(myPoint.calculateDistance(punto2));
