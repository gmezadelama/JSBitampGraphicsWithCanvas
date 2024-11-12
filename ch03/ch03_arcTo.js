function roundRect(x, y, w, h, r) {
  var path = new Path2D();
  path.moveTo(x + r, y);
  path.arcTo(x + w, y, x + w, y + h, r);
  path.arcTo(x + w, y + h, x, y + h, r);
  path.arcTo(x, y + h, x, y, r);
  path.arcTo(x, y, x + w, y, r);
  return path;
}

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var path1 = new Path2D();
path1.moveTo(200, 120);
path1.arcTo(200, 230, 50, 120, 20);
path1.lineTo(50, 120);
ctx.stroke(path1);

// var path2 = new Path2D();
// path2.moveTo(300, 300);
// path2.arcTo(400, 300, 400, 500, 20);
// path2.arcTo(400, 500, 300, 500, 20);
// path2.arcTo(300, 500, 300, 300, 20);
// path2.arcTo(300, 300, 400, 300, 20);
// ctx.stroke(path2);

var path2 = roundRect(300, 300, 100, 200, 20);
ctx.stroke(path2);
