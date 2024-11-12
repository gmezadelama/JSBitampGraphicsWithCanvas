var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var path1 = new Path2D("M50 50 L100 100");
path1.moveTo(50, 50);
ctx.stroke(path1);

var path2 = new Path2D("M50 200 Q75 150 100 200 T200 150");
ctx.stroke(path2);

var path3 = new Path2D("M50 400 C100 350 150 500 200 400 S250 350 300 400");
ctx.stroke(path3);
