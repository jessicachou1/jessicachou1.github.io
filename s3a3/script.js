let backgroundcolor;
let circlecolor;
let isCirclesMode; 
let isSquaresMode; 
let canvas

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    backgroundcolor = color(255, 255, 255);
    circlecolor = color(255, 255, 255);
    isSquaresMode = true;
  }

function draw() {

  if (isCirclesMode) {
    background(backgroundcolor);
    circleswithbackground();
  } else if (isSquaresMode) {
    background(backgroundcolor);
    squares();
  } else {
    circles();
    squares();
  }
}

function circleswithbackground() {
    // Background circles with black outline
    // noFill();
    // stroke(255);
    // for (let x = 0; x <= width; x += 40) {
    //   for (let y = 0; y <= height; y += 40) {
    //     const distance = dist(x, y, mouseX, mouseY) + 0.1;
    //     const force = map(distance, 0, 500, 20, 5);
    //     let circleSize = map(distance, 0, 200, 3, 10);
    //     circle(x + force * (x - mouseX) / distance, y + force * (y - mouseY) / distance, circleSize);
    //   }
    // }
    // Color-changing circles
    noStroke();
    for (let x = 0; x <= width; x += 40) {
      for (let y = 0; y <= height; y += 40) {
        const distance = dist(x, y, mouseX, mouseY) + 0.1;
        const force = map(distance, 0, 500, 20, 5);
        let circleSize = map(distance, 0, 200, 3, 10);
        let opacityAmount = map(distance, 0, 200, 2000, 1000);
        fill(red(circlecolor), green(circlecolor), blue(circlecolor), opacityAmount);
        circle(x + force * (x - mouseX) / distance, y + force * (y - mouseY) / distance, circleSize);
      }
    }
  }
  
function circles() {
    // Color-changing circles
    noStroke();
    for (let x = 0; x <= width; x += 40) {
      for (let y = 0; y <= height; y += 40) {
        const distance = dist(x, y, mouseX, mouseY) + 0.1;
        const force = map(distance, 0, 500, 20, 5);
        let circleSize = map(distance, 0, 200, 3, 10);
        let opacityAmount = map(distance, 0, 200, 2000, 1000);
        fill(red(circlecolor), green(circlecolor), blue(circlecolor), opacityAmount);
        circle(x + force * (x - mouseX) / distance, y + force * (y - mouseY) / distance, circleSize);
      }
    }
  }

function squares() {
    noStroke();
    for (let x = -500; x <= width + 500; x += 50) { // Adjusted loop boundaries
      for (let y = -100; y <= height + 100; y += 50) {
        const distance = dist(x, y, mouseX, mouseY) + 0.1;
        const force = map(distance, 0, 200, 20, 5);
  
        let circleSize = map(distance, 0, 200, 3, 7);
        fill(red(circlecolor), green(circlecolor), blue(circlecolor));
        rect(x + force * (x - mouseX) / distance, y + force * (y - mouseY) / distance, circleSize);
      }
    }
  }
  
  function switchToCirclesMode() {
    isCirclesMode = true;
    isSquaresMode = false;
  }
  
  function switchToSquaresMode() {
    isCirclesMode = false;
    isSquaresMode = true;
  }
  
  function switchToBothMode() {
    isCirclesMode = false;
    isSquaresMode = false;
  }
  
function mousePressed() {
    backgroundcolor = color(random(255), random(255), random(0));
    generateHighContrastColor();
  }
  
  function generateHighContrastColor() {
    let bgBrightness = brightness(backgroundcolor);
    let attempts = 0;
    do {
      circlecolor = color(random(255), random(255), random(255));
      attempts++;
    } while (abs(brightness(circlecolor) - bgBrightness) > 150 && attempts < 100);
  }
  function clearCanvas() {
    document.getElementById('title').style.display = 'none';
    backgroundcolor = color(255, 255, 255);
    circlecolor = color(255, 255, 255);
  }
  
  document.addEventListener('click', function() {
    document.getElementById('title').style.display = 'none'; // Hide the title when clicked anywhere on the page
  });
  