// Basic Drawing Example using DrawingManager Addon
// This version uses p5.prototype extension methods

let currentShape = null;

function setup() {
  createCanvas(800, 600);
  background(255);
  
  // Initialize the drawing manager
  initDrawingManager();
  
  // Set drawing properties
  dmStroke(0, 100, 200);
  dmStrokeWeight(2);
  dmNoFill();
}

function draw() {
  // No need to redraw, shapes are drawn as they're created
}

function mousePressed() {
  // Start a new shape when mouse is pressed
  currentShape = dmAddShape();
  currentShape.addVertex(mouseX, mouseY);
}

function mouseDragged() {
  // Continue adding vertices while dragging
  if (currentShape) {
    currentShape.addVertex(mouseX, mouseY);
  }
}

function mouseReleased() {
  // Finish the current shape
  currentShape = null;
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    // Clear the canvas
    dmClear();
  } else if (key === ' ') {
    // Save as SVG (requires p5.svg library)
    dmSaveSVG();
  }
}
