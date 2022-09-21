class Point {

  constructor(private x?:number,private y?:number) {
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

const point = new Point(2, 1);
point.draw();