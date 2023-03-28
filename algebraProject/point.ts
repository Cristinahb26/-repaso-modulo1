
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
}



