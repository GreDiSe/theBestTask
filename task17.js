function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.plus = function (obj) {return {x: this.x + obj.x, y: this.y + obj.y}};
console.log(new Point(1, 2).plus(new Point(2, 1)));