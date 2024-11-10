var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.strokeRect(0, 0, c.width, c.height);
ctx.fillRect(10, 10, 55, 50);

ctx.canvas.addEventListener("click", function (e) {
  console.log(
    `I was clicked by Bianca Helene at position (${e.offsetX},${e.offsetY})!`
  );
});
