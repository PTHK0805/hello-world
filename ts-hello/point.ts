
export class Point {

  constructor(private _x?:number,private _y?:number) {
  }

  draw() {
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }
}