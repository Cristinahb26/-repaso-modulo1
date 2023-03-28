export class Point {

    private x: number;
    private y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    setX(x:number): void{
        this.x = x;
    }

    getX(): number{
        return this.x
    }

    setY(y:number): void{
        this.y
    }
    getY(): number{
        return this.y
    }

    toString(): string{
        return `(X: ${this.x}, Y: ${this.y})`;
    }



    distanceTolOrigin(): number {
        let x = this.x;
        let y = this.y;
      return  Math.sqrt(x*x + y*y);
    }

    calculateDistance(anotherPoint:Point):number {
        let xDist = this.x - anotherPoint.x;
        let yDist = this.y - anotherPoint.y;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));

    }

    calcularQuadrant(x:number, y:number):number {
        if(x == 0 || y == 0){
            return 0;
        }

        else if (x > 0 && y > 0){
            return 1;
        }

        else if (x < 0 && y > 0){
            return 2;
        }

        else if (x < 0 && y < 0){
            return 3;
        }

        else  { x > 0 && y < 0
             return 4;
        }
    }
}


