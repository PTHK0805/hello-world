export class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
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
