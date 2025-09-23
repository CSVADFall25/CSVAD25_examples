// Main JavaScript file for the HTML project

// Hello World Portrait - Konva.js Version in a class App

class App {
  constructor(containerId = 'container', width = 600, height = 600) {
    this.width = width;
    this.height = height;
    this.stage = new Konva.Stage({
      container: containerId,
      width: this.width,
      height: this.height,
    });
    this.layer = new Konva.Layer();
    this.stage.add(this.layer);
    this.drawFace1();
  }

  drawFace1() {
    // Background
    const background = new Konva.Rect({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      fill: 'black',
    });

    this.layer.add(background);

    // Face (red square)
    const face = new Konva.Rect({
      x: this.width / 2 - 150,
      y: this.height / 2 - 150,
      width: 300,
      height: 300,
      fill: 'red',
    });

    this.layer.add(face);

    // Eyes (white rectangles)
    const leftEye = new Konva.Rect({
      x: this.width / 2 - 60 - 50,
      y: this.height / 2 - 60 - 10,
      width: 100,
      height: 20,
      fill: 'white',
    });

    const rightEye = new Konva.Rect({
      x: this.width / 2 + 60 - 50,
      y: this.height / 2 - 60 - 10,
      width: 100,
      height: 20,
      fill: 'white',
    });

    this.layer.add(leftEye);
    this.layer.add(rightEye);

    // Pupils (black rectangles)
    const leftPupil = new Konva.Rect({
      x: this.width / 2 - 60 - 5,
      y: this.height / 2 - 60 - 10,
      width: 10,
      height: 20,
      fill: 'black',
    });

    const rightPupil = new Konva.Rect({
      x: this.width / 2 + 60 - 5,
      y: this.height / 2 - 60 - 10,
      width: 10,
      height: 20,
      fill: 'black',
    });

    this.layer.add(leftPupil);
    this.layer.add(rightPupil);

    // Mouth (ellipse)
    const mouth = new Konva.Ellipse({
      x: this.width / 2,
      y: this.height / 2,
      radius: {
        x: 100,
        y: 20,
      },
      fill: 'black',
    });

    this.layer.add(mouth);

    // Mouth edge lines
    const leftMouthLine = new Konva.Line({
      points: [
        this.width / 2 - 100, this.height / 2 - 20,
        this.width / 2 - 100, this.height / 2 + 20,
      ],
      stroke: 'black',
      strokeWidth: 5,
      lineCap: 'round',
    });
    const rightMouthLine = new Konva.Line({
      points: [
        this.width / 2 + 100, this.height / 2 - 20,
        this.width / 2 + 100, this.height / 2 + 20,
      ],
      stroke: 'black',
      strokeWidth: 5,
      lineCap: 'round',
    });

    this.layer.add(leftMouthLine);
    this.layer.add(rightMouthLine);
    this.layer.draw();
  }

  drawFace2() {
    // Background - gradient effect with multiple rectangles
    const bg1 = new Konva.Rect({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      fill: '#2c1810',
    });
    this.layer.add(bg1);

    // Face (circular, blue)
    const face = new Konva.Circle({
      x: this.width / 2,
      y: this.height / 2,
      radius: 150,
      fill: '#4a90e2',
      stroke: '#2c5aa0',
      strokeWidth: 3,
    });
    this.layer.add(face);

    // Eyes (circular, yellow)
    const leftEye = new Konva.Circle({
      x: this.width / 2 - 60,
      y: this.height / 2 - 40,
      radius: 25,
      fill: '#f5d942',
      stroke: '#d4af37',
      strokeWidth: 2,
    });

    const rightEye = new Konva.Circle({
      x: this.width / 2 + 60,
      y: this.height / 2 - 40,
      radius: 25,
      fill: '#f5d942',
      stroke: '#d4af37',
      strokeWidth: 2,
    });

    this.layer.add(leftEye);
    this.layer.add(rightEye);

    // Pupils (small black circles)
    const leftPupil = new Konva.Circle({
      x: this.width / 2 - 60,
      y: this.height / 2 - 40,
      radius: 8,
      fill: 'black',
    });

    const rightPupil = new Konva.Circle({
      x: this.width / 2 + 60,
      y: this.height / 2 - 40,
      radius: 8,
      fill: 'black',
    });

    this.layer.add(leftPupil);
    this.layer.add(rightPupil);

    // Nose (small triangle)
    const nose = new Konva.RegularPolygon({
      x: this.width / 2,
      y: this.height / 2 - 10,
      sides: 3,
      radius: 15,
      fill: '#2c5aa0',
      rotation: 180,
    });
    this.layer.add(nose);

    // Mouth (arc/smile)
    const mouth = new Konva.Arc({
      x: this.width / 2,
      y: this.height / 2 + 20,
      innerRadius: 30,
      outerRadius: 35,
      angle: 180,
      fill: '#ff6b6b',
      rotation: 0,
    });
    this.layer.add(mouth);

    this.layer.draw();
  }

  drawFace3() {
    // Background - colorful pattern
    const bg = new Konva.Rect({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      fill: '#1a1a2e',
    });
    this.layer.add(bg);

    // Face (hexagon, green)
    const face = new Konva.RegularPolygon({
      x: this.width / 2,
      y: this.height / 2,
      sides: 6,
      radius: 140,
      fill: '#4ecdc4',
      stroke: '#26a69a',
      strokeWidth: 4,
    });
    this.layer.add(face);

    // Eyes (star shapes, purple)
    const leftEye = new Konva.Star({
      x: this.width / 2 - 50,
      y: this.height / 2 - 30,
      numPoints: 5,
      innerRadius: 10,
      outerRadius: 20,
      fill: '#9c27b0',
      stroke: '#7b1fa2',
      strokeWidth: 2,
    });

    const rightEye = new Konva.Star({
      x: this.width / 2 + 50,
      y: this.height / 2 - 30,
      numPoints: 5,
      innerRadius: 10,
      outerRadius: 20,
      fill: '#9c27b0',
      stroke: '#7b1fa2',
      strokeWidth: 2,
    });

    this.layer.add(leftEye);
    this.layer.add(rightEye);

    // Nose (diamond shape)
    const nose = new Konva.RegularPolygon({
      x: this.width / 2,
      y: this.height / 2 + 5,
      sides: 4,
      radius: 12,
      fill: '#ff9800',
      rotation: 45,
    });
    this.layer.add(nose);

    // Mouth (wavy line using bezier curve)
    const mouth = new Konva.Shape({
      sceneFunc: function(context, shape) {
        context.beginPath();
        context.moveTo(0, 0);
        context.quadraticCurveTo(50, -20, 100, 0);
        context.quadraticCurveTo(150, 20, 200, 0);
        context.fillStrokeShape(shape);
      },
      x: this.width / 2 - 100,
      y: this.height / 2 + 40,
      fill: '#e91e63',
      stroke: '#c2185b',
      strokeWidth: 3,
    });
    this.layer.add(mouth);

    this.layer.draw();
  }
}

window.onload = function() {
  new App();
};