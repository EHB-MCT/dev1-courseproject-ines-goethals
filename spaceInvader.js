let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {
  context.fillStyle = "#8B94CA";
  context.beginPath();
  context.rect(400, 100, 200, 100);
  context.fill();
  context.stroke();

  context.fillStyle = "#8B94CA";
  context.beginPath();
  context.rect(600, 200, 100, 100);
  context.fill();
  context.stroke();

  context.fillStyle = "#8B94CA";
  context.beginPath();
  context.rect(700, 100, 200, 100);
  context.fill();
  context.stroke();

  context.fillStyle = "#8B94CA";
  context.beginPath();
  context.rect(400, 300, 500, 100);
  context.fill();
  context.stroke();

  context.fillStyle = "#8B94CA";
  context.beginPath();
  context.rect(400, 500, 200, 100);
  context.fill();
  context.stroke();

  context.fillStyle = "#8B94CA";
  context.beginPath();
  context.rect(700, 500, 200, 100);
  context.fill();
  context.stroke();
}
