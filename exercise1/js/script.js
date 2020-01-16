"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/


window.addEventListener('load', setup);

let numPixel = 1000;

let pixelBGcolor = "black";

let r = Math.random()*255;
let g = Math.random()*255;
let b = Math.random()*255;
let pixelREVERTcolor = `rgb(${r}, ${g} ,${b} )`;

let rotation = 0;

let pixelArray = [];

let pixelDelay = 1000;
let secondDelay = 500;
let secondPixelcolor = "pink";
    // setup
    //
    // Adds DIVs to the page along with event listeners that will allow
    // then to change color on mouseover.
function setup(){


    document.addEventListener('keydown', pageRotation);


    // A loop that runs once per pixel we need
  for (let i = 0; i < numPixel; i++) {
    // Create a DIV and store it in a variable
  let pixel = document.createElement('div');
    // Add the 'pixel' class to the new element
  pixel.setAttribute('class', 'pixel');
    // Add a mouseover handler to the new element
  pixel.addEventListener('mouseover', paint);
    // Add the element to the body of the page
  document.body.appendChild(pixel);

  pixelArray.push(pixel);
  }
}


function pageRotation(e){
//if the right arrow is pressed
  if (e.keyCode === 39) { // Only enlarge if they pressed space

  for (let i = 0; i < pixelArray.length; i++){
     pixelArray[i].style.transform = "rotate(1deg)";
   }
  }

//if the left arrow is pressed
  if (e.keyCode === 37) { // Only enlarge if they pressed space

    for (let i = 0; i < pixelArray.length; i++){
       pixelArray[i].style.transform = "rotate(-1deg)";
     }
  }



}

// paint
//
// Called by the mouseover event handler on each pixel. Changes
// the pixel's color and sets a timer for it to revert
function paint(e){
  let pixel = e.target;
  pixel.style.backgroundColor = pixelBGcolor;

  // Set a timeout to call the reset function after a delay
  // When we pass additional parameters (like 'pixel' below) they
  // are passed to the callback function (resetPixel)
  setTimeout(resetPixel, pixelDelay, pixel);
}


function resetPixel(pixel){
  pixel.style.backgroundColor = pixelREVERTcolor;
  setTimeout(reresetPixel, secondDelay, pixel);
}


function reresetPixel(pixel){
  pixel.style.backgroundColor = secondPixelcolor;
}
