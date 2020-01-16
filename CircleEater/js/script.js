"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const PLAYER_SIZE_GAIN = 50;
const PLAYER_SIZE_LOSS = 1;

let player = {
  x: 0,
  y: 0,
  size: 5,
  maxSize: 60,
  alive : true,
  color : '#cccc55'
}
let prey = {
  x: 0,
  size : 55,
  color: (250,150,100)
}
// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
createCanvas(500,500);
preyPosition();
noCursor();
}


// draw()
//
// Description of draw()

function draw() {

  if (!player.alive) {
     // By using "return" the draw() function exits immediately
     return;
   }

  background(50,150,200);
  updatePlayer();
  drawPlayer();
  displayFood();

}



function updatePlayer(){
  player.x = mouseX;
  player.y = mouseY;

  player.size = constrain(player.size - PLAYER_SIZE_LOSS, 0, player.maxSize);
  if (player.size === 0) {
    player.alive = false;
  }
}

function drawPlayer(){
  push();
  noStroke();
  fill(player.color);
  ellipse(player.x,player.y,player.size);
  pop();
}

function displayFood(){
  push();
  ellipse(prey.x,prey.y,prey.size);
  noStroke();
  fill(prey.color);
  pop();

}

function preyPosition(){
  prey.x = random(0,width);
  prey.y = random(0,height);
}
