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
    return Point;
}());
exports.Point = Point;
