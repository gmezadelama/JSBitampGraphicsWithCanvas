var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var path1 = new Path2D();
path1.rect(200, 400, 20, 50);
path1.lineTo(300, 500);
ctx.stroke(path1);

ctx.strokeStyle = "blue";
ctx.strokeRect(400, 400, 20, 50);

ctx.fillStyle = "red";
ctx.fillRect(600, 200, 20, 50);
