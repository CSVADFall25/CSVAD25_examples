let drawingManager;
let shape;
let mirrorShape;

function setup() {
  createCanvas(800, 600);
  background(255);
  drawingManager = new DrawingManager(window);
  drawingManager.strokeWeight(2);
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
  // Create the main shape
  drawingManager.stroke(0, 0, 255);
  shape = drawingManager.addShape();
  
  // Create a mirrored version
  drawingManager.stroke(255, 0, 0);
  mirrorShape = drawingManager.addShape();
  
  
  // Set up transformation for mirroring
  mirrorShape.pushMatrix();
  mirrorShape.translate(width, 0);
  mirrorShape.scale(-1, 1);
}

function mouseDragged() {
  // Add vertex to main shape
  shape.addVertex(mouseX, mouseY);
  
  // Add same vertex to mirror shape (transformation will flip it)
  mirrorShape.addVertex(mouseX, mouseY);
}

function mouseReleased() {
  // Close the transformation
  if (mirrorShape) {
    mirrorShape.popMatrix();
  }
}
