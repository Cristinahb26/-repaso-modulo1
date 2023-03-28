"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var vertex1 = new point_1.Point(0, 0);
var vertex2 = new point_1.Point(0, 6);
var vertex3 = new point_1.Point(6, 0);
var myTriangle = new triangle_1.triangle(vertex1, vertex2, vertex3);
console.log(myTriangle.calculateLengthSides());
