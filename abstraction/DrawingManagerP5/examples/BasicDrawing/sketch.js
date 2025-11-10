let drawingManager;
let shape;

function setup() {
  createCanvas(800, 600);
  background(255);
  drawingManager = new DrawingManager(window);
  drawingManager.strokeWeight(3);
}

function draw() {
  // Drawing happens in mouse events
}

function keyPressed() {
  // Save SVG when spacebar is pressed
  if (key === ' ') {
    drawingManager.saveSVG();
  }
  // Clear canvas when 'c' is pressed
  if (key === 'c') {
    drawingManager.clear();
  }
}

function mousePressed() {
  // Start a new shape when mouse is pressed
  shape = drawingManager.addShape();
  drawingManager.stroke(0, 0, 0);
}

function mouseDragged() {
  // Add vertices as mouse is dragged
  shape.addVertex(mouseX, mouseY);
}
