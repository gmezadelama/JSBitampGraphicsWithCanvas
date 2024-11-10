var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var path1 = new Path2D();
var x = 200;
var y = 200;
var r = 100;
path1.moveTo(x, y + r);
var inc = 0.1;

for (let t = 0; t < 2 * Math.PI; t += inc) {
  path1.lineTo(x + r * Math.sin(t), y + r * Math.cos(t));
}
path1.closePath();
ctx.stroke(path1);

var path2 = new Path2D();
var x2 = 500;
var y2 = 200;
var r2 = 100;
path2.arc(x2, y2, r2, 0, 2 * Math.PI);
ctx.stroke(path2);
