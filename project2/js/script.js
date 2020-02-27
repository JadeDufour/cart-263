"use strict";

/********************************************************************

Title of Project
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

let leftChoice;
let rightChoice;

//An array of creepy clickbait thumbnails found online
let clickbait = [
  "no1.jpg",
  "no2.jpg",
  "no3.jpg",
  "no4.jpg",
  "no5.jpg",
  "no6.jpg",
  "no7.jpg",
  "no8.jpg",
  "no9.jpg",
  "no10.jpg",
  "no11.jpg",
  "no12.jpg"
]

//an array of actual thumbnails that kidsfriendly
let friendly = [
  "good1.png",
  "good2.png",
  "good3.png",
  "good4.png",
  "good5.png",
  "good6.png"
]


$(document).ready(setup);



function setup(){
  $leftChoice = $('.left');
  $rightChoice = $('.right');
}
