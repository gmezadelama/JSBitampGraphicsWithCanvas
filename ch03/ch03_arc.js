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
path2.moveTo(500, 200);
path2.arc(x2, y2, r2, 0, Math.PI / 2);
path2.closePath();
path2.lineTo(600, 0);
ctx.stroke(path2);

var path3 = new Path2D();
var x3 = 600;
var y3 = 400;
var r3 = 100;
path3.moveTo(500, 350);
path3.lineTo(550, 500);
path3.moveTo(700, 400);
path3.arc(x3, y3, r3, 0, Math.PI / 2);
path3.moveTo(600, 400);
path3.lineTo(800, 600);
ctx.stroke(path3);

var path4 = new Path2D();
path4.ellipse(200, 450, 150, 50, Math.PI / 4, 0, Math.PI * 2);
ctx.stroke(path4);
