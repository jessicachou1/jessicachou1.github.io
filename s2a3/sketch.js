let seconds = 0;
let minutes = 0;
let hours = 0;

let minMillis = 0;
let secMillis = 0;

const mindelay = 100;
const secdelay = 10;

let colors = ['#E91E63', '#2196F3', '#4CAF50', '#FF9800', '#9C27B0'];
let currentColorIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);
  seconddelta = 0;
  minutedelta = 0;
  hourdelta = 0;
}

function draw() {
    background(colors[currentColorIndex]);;

  translate(width / 2, height / 2);

  noFill();

  //arrows//
  push();
  translate(300, -12.5);
  fill(255, 255, 255, 200);
  triangle(0, 0, 0, 50, 25, 25);
  pop();

  push();
  translate(-300, -12.5);
  fill(255, 255, 255, 200);
  triangle(0, 0, 0, 50, -25, 25);
  pop();

  //clockhands//
  stroke(255);
  push();
  s = second();
  if (mouseIsPressed && dist(mouseX, mouseY, width / 2 + 300, height / 2 - 12.5) < 50){
  // if (mouseX >= width - width / 4) {
    seconddelta = seconddelta + 0.7;
    s = s + seconddelta;
  } else if (mouseIsPressed && dist(mouseX, mouseY, width / 2 - 300, height / 2 - 12.5) < 50){
    // (mouseX > width / 4 && mouseX < width - width / 4) {
    seconddelta = seconddelta - 0.7;
    s = s + seconddelta;
  } else {
     s = second();
    seconddelta = 0;
  }
  secondmap = map(s, 0, 60, 0, 360);
  rotate(secondmap);
  strokeWeight(3);
  line(0, 0, 0, -150);

  pop();
  push();
  m = minute();
  if (mouseIsPressed && dist(mouseX, mouseY, width / 2 + 300, height / 2 - 12.5) < 50){
    // (mouseX >= width - width / 4) {
    minutedelta = minutedelta + 0.17;
    m = m + minutedelta;
  } else if (mouseIsPressed && dist(mouseX, mouseY, width / 2 - 300, height / 2 - 12.5) < 50){
    // (mouseX > width / 4 && mouseX < width - width / 4) {
    minutedelta = minutedelta - 0.17;
    m = m + minutedelta;
  } else {
    m = minute();
    minutedelta = 0;
  }
  rotate(map(m, 0, 60, 0, 360));
  strokeWeight(5);
  line(0, 0, 0, -100);
  pop();

  push();
  h = hour();
  if (mouseIsPressed && dist(mouseX, mouseY, width / 2 + 300, height / 2 - 12.5) < 50){
    // (mouseX >= width - width / 3) {
    hourdelta = hourdelta + 0.005;
    h = h + hourdelta;
  } else if (mouseIsPressed && dist(mouseX, mouseY, width / 2 - 300, height / 2 - 12.5) < 50){
    // (mouseX > width / 4 && mouseX < width - width / 4) {
    hourdelta = hourdelta - 0.005;
    h = h + hourdelta;
  } else {
    h = hour();
    hourdelta = 0;
  }
  rotate(map(h, 0, 24, 0, 720));
  strokeWeight(7);
  line(0, 0, 0, -80);
  pop();

  //arrowcaption//
  noStroke();
  textSize(20);
  textFont("Space Mono");
  textStyle(BOLD);
  fill(255, 255, 255, 120);
  text("go forward", 280, 100);
  fill(255, 255, 255, 120);
  text("go back", -300, 100);

  //timechanging numbers//
  if (millis() - minMillis >= mindelay) {
    minMillis = millis();
    if (mouseIsPressed && dist(mouseX, mouseY, width / 2 + 300, height / 2 - 12.5) < 50){
      // (mouseX >= width - width / 4) {
      if (minutes <= 58) {
        minutes++;
      } else if (minutes === 59) {
        minutes = 0;
        if (hours <= 22) {
          hours++;
        } else {
          hours = 0;
        }
      }
    } else if (mouseIsPressed && dist(mouseX, mouseY, width / 2 - 300, height / 2 - 12.5) < 50){
      // (mouseX > width / 4 && mouseX < width - width / 4) {
      if (minutes <= 59 && minutes >= 1) {
        minutes--;
      } else if (minutes === 0) {
        minutes = 59;
        if (hours > 0) {
          hours--;
        } else {
          hours = 23;
        }
      }
    } else {
      minutes = minute();
      hours = hour();
    }
  }

  if (millis() - secMillis >= secdelay) {
    secMillis = millis();
    if (mouseIsPressed && dist(mouseX, mouseY, width / 2 + 300, height / 2 - 12.5) < 50){
      // (mouseX >= width - width / 4) {
      if (seconds <= 58) {
        seconds++;
      } else if (seconds === 59) {
        seconds = 0;
      }
    } else if (mouseIsPressed && dist(mouseX, mouseY, width / 2 - 300, height / 2 - 12.5) < 50){
      // (mouseX > width / 4 && mouseX < width - width / 4) {
      if (seconds <= 58 && seconds >= 2) {
        seconds--;
      } else if (hours === 0 && minutes === 0) {
        seconds = 0;
      } else if (seconds === 1) {
        seconds = 58;
      }
    } else {
      seconds = second();
    }
  }

const timeText = nf(hours, 2) + ":" + nf(minutes, 2) + ":" + nf(seconds, 2);

  textSize(100);
  fill(255, 255, 255, 80);
  text(timeText, 0, 35);
}

function mousePressed() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }
  