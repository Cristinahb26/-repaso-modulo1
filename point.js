"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setY = function (y) {
        this.y;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(X: ".concat(this.x, ", Y: ").concat(this.y, ")");
    };
    Point.prototype.distanceTolOrigin = function () {
        var x = this.x;
        var y = this.y;
        return Math.sqrt(x * x + y * y);
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var xDist = this.x - anotherPoint.x;
        var yDist = this.y - anotherPoint.y;
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    };
    Point.prototype.calcularQuadrant = function (x, y) {
        if (x == 0 || y == 0) {
            return 0;
        }
        else if (x > 0 && y > 0) {
            return 1;
        }
        else if (x < 0 && y > 0) {
            return 2;
        }
        else if (x < 0 && y < 0) {
            return 3;
        }
        else {
            x > 0 && y < 0;
            return 4;
        }
    };
    Point.prototype.calculateNearest = function (points) {
        var arrObjeto = Point[0];
        for (var i = 1; i < Point.length; i++) {
            if (Point[i].calculateDistance(0, 0) < arrObjeto.calculateDistance(0, 0)) {
                arrObjeto = Point[i];
            }
        }
        return arrObjeto;
    };
    return Point;
}());
exports.Point = Point;
