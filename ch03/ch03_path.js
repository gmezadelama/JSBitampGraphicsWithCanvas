var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var path1 = new Path2D();
path1.rect(200, 400, 20, 50);
path1.lineTo(300, 500);

var myPath = new Path2D();
myPath.moveTo(50, 50);
myPath.lineTo(100, 100);
myPath.lineTo(0, 100);
myPath.closePath();

ctx.stroke(myPath);
ctx.fillStyle = "red";
ctx.fill(myPath);

var myPath2 = new Path2D();
myPath2.moveTo(150, 150);
myPath2.lineTo(200, 200);
myPath2.lineTo(100, 200);
myPath2.closePath();
myPath2.lineTo(150, 100);
myPath2.moveTo(150, 210);
myPath2.lineTo(100, 160);
myPath2.lineTo(200, 160);
myPath2.closePath();
ctx.stroke(myPath2);

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300);
ctx.closePath();
ctx.lineTo(250, 200);
ctx.moveTo(250, 310);
ctx.lineTo(200, 260);
ctx.lineTo(300, 260);
ctx.closePath();
ctx.stroke();
