var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var path1 = new Path2D();
path1.moveTo(10, 10);
path1.quadraticCurveTo(200, 50, 100, 100);
ctx.stroke(path1);

var path2 = new Path2D();
path2.moveTo(110, 110);
path2.bezierCurveTo(310, 20, 20, 310, 210, 310);
ctx.stroke(path2);
