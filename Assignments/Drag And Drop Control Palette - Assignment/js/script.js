function drawShapes() {
  var rectangle = document.getElementById("rectangle");
  var canvasContext = rectangle.getContext("2d");
  canvasContext.beginPath();
  canvasContext.rect(1, 1, 100, 100);
  canvasContext.strokeStyle = "darkblue";
  canvasContext.stroke();

  var circle = document.getElementById("circle");
  canvasContext = circle.getContext("2d");
  canvasContext.beginPath();
  canvasContext.arc(53, 53, 50, 0, 2 * Math.PI);
  canvasContext.strokeStyle = "darkblue";
  canvasContext.stroke();

  var triangle = document.getElementById("triangle");
  canvasContext = triangle.getContext("2d");
  canvasContext.beginPath();
  canvasContext.beginPath();
  canvasContext.moveTo(50, 0);
  canvasContext.lineTo(100, 100);
  canvasContext.lineTo(0, 100);
  canvasContext.closePath();
  canvasContext.strokeStyle = "darkblue";
  canvasContext.stroke();

  var arrow = document.getElementById("arrow");
  canvasContext = arrow.getContext("2d");
  canvasContext.beginPath();
  canvasContext.moveTo(1, 40);
  canvasContext.lineTo(50, 40);
  canvasContext.lineTo(50, 20);
  canvasContext.lineTo(100, 50);
  canvasContext.lineTo(50, 80);
  canvasContext.lineTo(50, 65);
  canvasContext.lineTo(1, 65);
  canvasContext.closePath();
  canvasContext.strokeStyle = "darkblue";
  canvasContext.stroke();
}

function allowDrop(event) {
  event.preventDefault();
}

function dragElement(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drawElement(event) {
  event.preventDefault();
  var element = event.dataTransfer.getData("text");
  var canvasTarget = document.getElementById("canvas-grid");
  var canvasContext = canvasTarget.getContext("2d");
  var canvas = canvasTarget.getBoundingClientRect();
  var x = event.clientX - canvas.left;
  var y = event.clientY - canvas.top;

  if (element == "rectangle") {
    drawRectangle(canvasContext, x, y);
  } else if (element == "circle") {
    drawCircle(canvasContext, x, y);
  } else if (element == "triangle") {
    drawTriangle(canvasContext, x, y);
  } else if (element == "arrow") {
    drawArrow(canvasContext, x, y);
  }
}

var rectangleCounter = 0;

function drawRectangle(canvasContext, x, y) {
  rectangleCounter++;
  canvasContext.beginPath();
  canvasContext.rect(x - 50, y - 50, 100, 100);
  canvasContext.closePath();
  canvasContext.font = "14px Times";
  canvasContext.fillStyle = "darkblue";
  canvasContext.fillText("Rectangle " + rectangleCounter, x - 35, y + 5);
  canvasContext.strokeStyle = "darkblue";
  canvasContext.stroke();
}

var circleCounter = 0;

function drawCircle(canvasContext, x, y) {
  circleCounter++;
  canvasContext.beginPath();
  canvasContext.arc(x, y, 50, 0, 2 * Math.PI);
  canvasContext.font = "14px Times";
  canvasContext.fillStyle = "darkblue";
  canvasContext.fillText("Circle " + circleCounter, x - 25, y + 7);
  canvasContext.strokeStyle = "darkblue";
  canvasContext.stroke();
}

var triangleCounter = 0;

function drawTriangle(canvasContext, x, y) {
  triangleCounter++;
  canvasContext.beginPath();
  canvasContext.moveTo(x, y - 50);
  canvasContext.lineTo(x + 50, y + 50);
  canvasContext.lineTo(x - 50, y + 50);
  canvasContext.closePath();
  canvasContext.font = "14px Times";
  canvasContext.fillStyle = "darkblue";
  canvasContext.fillText("Triangle " + triangleCounter, x - 30, y + 30);
  canvasContext.strokeStyle = "darkblue";
  canvasContext.stroke();
}

var arrowCounter = 0;

function drawArrow(canvasContext, x, y) {
  arrowCounter++;
  canvasContext.beginPath();
  canvasContext.moveTo(x - 50, y - 15);
  canvasContext.lineTo(x, y - 15);
  canvasContext.lineTo(x, y - 30);
  canvasContext.lineTo(x + 50, y);
  canvasContext.lineTo(x, y + 30);
  canvasContext.lineTo(x, y + 15);
  canvasContext.lineTo(x - 50, y + 15);
  canvasContext.closePath();
  canvasContext.font = "14px Times";
  canvasContext.fillStyle = "darkblue";
  canvasContext.fillText("Arrow " + arrowCounter, x - 32, y + 5);
  canvasContext.strokeStyle = "darkblue";
  canvasContext.stroke();
}
