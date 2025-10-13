// Hysteresis visualization inspired by Canny edge detection
// Strong edges = white
// Weak edges = gray
// Non-edges = black
// Hysteresis keeps weak edges only if they connect to strong edges

let img;
let edges;
let resultNoHysteresis;
let resultWithHysteresis;

let highThreshold = 180;
let lowThreshold = 100;

function preload() {
  img = loadImage('assets/test.jpg'); // Place a grayscale image in assets
}

function setup() {
  createCanvas(img.width * 3, img.height + 80);
  pixelDensity(1);
  
  img.filter(GRAY);
  edges = createImage(img.width, img.height);
  resultNoHysteresis = createImage(img.width, img.height);
  resultWithHysteresis = createImage(img.width, img.height);
  
  detectEdges();
  applyHysteresis();
}

function draw() {
  background(255);

  // === Draw three images side by side ===
  image(img, 0, 0);
  image(resultNoHysteresis, img.width, 0);
  image(resultWithHysteresis, img.width * 2, 0);

  // === Titles ===
  drawLabel("Original Image", img.width / 2, img.height + 20);
  drawLabel("Simple Thresholding", img.width + img.width / 2, img.height + 20);
  drawLabel("Hysteresis Edge Tracking", img.width * 2 + img.width / 2, img.height + 20);

  // === Legend ===
  drawLegend(20, img.height + 50);
}

function drawLabel(txt, x, y) {
  noStroke();
  fill(0);
  textAlign(CENTER);
  textSize(14);
  text(txt, x, y);
}

// === Legend showing meaning of edge colors ===
function drawLegend(x, y) {
  textAlign(LEFT, CENTER);
  textSize(12);
  
  // Strong edge
  fill(255);
  stroke(0);
  rect(x, y - 8, 20, 16);
  noStroke();
  fill(0);
  text("Strong Edge (above high threshold)", x + 30, y);

  // Weak edge
  fill(150);
  stroke(0);
  rect(x + 300, y - 8, 20, 16);
  noStroke();
  fill(0);
  text("Weak Edge (between thresholds)", x + 330, y);

  // Non-edge
  fill(0);
  stroke(0);
  rect(x + 540, y - 8, 20, 16);
  noStroke();
  fill(0);
  text("Non-edge (below low threshold)", x + 570, y);
}

// --- Edge detection (simple gradient magnitude) ---
function detectEdges() {
  img.loadPixels();
  edges.loadPixels();
  resultNoHysteresis.loadPixels();
  
  for (let y = 1; y < img.height - 1; y++) {
    for (let x = 1; x < img.width - 1; x++) {
      let i = (y * img.width + x) * 4;
      // Simple gradient approximation
      let gx = img.pixels[i + 4] - img.pixels[i - 4];
      let gy = img.pixels[i + img.width * 4] - img.pixels[i - img.width * 4];
      let mag = sqrt(gx * gx + gy * gy);
      
      edges.pixels[i] = edges.pixels[i + 1] = edges.pixels[i + 2] = mag;
      edges.pixels[i + 3] = 255;
      
      if (mag > highThreshold) {
        // Strong edge
        setNoHysteresis(i, 255);
      } else if (mag > lowThreshold) {
        // Weak edge
        setNoHysteresis(i, 150);
      } else {
        // Non-edge
        setNoHysteresis(i, 0);
      }
    }
  }
  img.updatePixels();
  edges.updatePixels();
  resultNoHysteresis.updatePixels();
}

function setNoHysteresis(i, v) {
  resultNoHysteresis.pixels[i] = v;
  resultNoHysteresis.pixels[i + 1] = v;
  resultNoHysteresis.pixels[i + 2] = v;
  resultNoHysteresis.pixels[i + 3] = 255;
}

// --- Apply hysteresis ---
function applyHysteresis() {
  edges.loadPixels();
  resultWithHysteresis.loadPixels();
  
  for (let y = 1; y < img.height - 1; y++) {
    for (let x = 1; x < img.width - 1; x++) {
      let i = (y * img.width + x) * 4;
      let val = edges.pixels[i];
      
      if (val > highThreshold) {
        // strong edge
        setHysteresis(i, 255);
      } else if (val > lowThreshold) {
        // check neighbors for strong edge
        if (hasStrongNeighbor(x, y)) {
          setHysteresis(i, 150);
        } else {
          setHysteresis(i, 0);
        }
      } else {
        setHysteresis(i, 0);
      }
    }
  }
  resultWithHysteresis.updatePixels();
}

function setHysteresis(i, v) {
  resultWithHysteresis.pixels[i] = v;
  resultWithHysteresis.pixels[i + 1] = v;
  resultWithHysteresis.pixels[i + 2] = v;
  resultWithHysteresis.pixels[i + 3] = 255;
}

function hasStrongNeighbor(x, y) {
  for (let j = -1; j <= 1; j++) {
    for (let k = -1; k <= 1; k++) {
      if (j === 0 && k === 0) continue;
      let ni = ((y + j) * img.width + (x + k)) * 4;
      if (edges.pixels[ni] > highThreshold) {
        return true;
      }
    }
  }
  return false;
}
