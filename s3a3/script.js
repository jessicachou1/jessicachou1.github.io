let backgroundcolor;
let circlecolor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundcolor = color(0, 0, 50);
  circlecolor = color(255, 255, 255);

}

function draw() {
  noStroke();
  background(backgroundcolor);

  for (let x = -100; x <= width * 1.5; x += 20) {
    for (let y = -100; y <= height * 1.5; y += 20) {
      const distance = dist(x, y, mouseX, mouseY)+ 0.1;
      const force = map(distance, 0, 200, 20, 5);

      let circleSize = map(distance, 0, 200, 3, 8);
      let opacityAmount = map(distance, 0, 200, 2000, 500);
      fill(red(circlecolor), green(circlecolor), blue(circlecolor), opacityAmount);
      circle(x + force * (x - mouseX) / distance, y + force * (y - mouseY) / distance, circleSize);
    }
  }
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