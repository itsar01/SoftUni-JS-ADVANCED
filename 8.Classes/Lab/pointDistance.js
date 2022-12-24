class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}

const point1 = new Point(1, 1);
const point2 = new Point(3, 5);

console.log(point1, point2);
console.log(Point.distance(point1, point2));
