"use strict";

/********************************************************************

Title of Project
Jade Dufour

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

**Every 'friendly' thumbnails come from verified (certified) youtube channels (Nick Jr, Peppa Pig Official, Little Angel, Masha ans The Bear, Toddler Fun Learning, DC SuperHero Girls)**

*********************************************************************/
$(document).ready(setup);
// will add a initial page (intro) later
// let $initialPage;
// let $mainPage;

function setup(){


  if (annyang) {

// Let's define our first command. First the text we expect, and then the function it should call
var commands = {
//the player guesses the animal, if then the games handles the guess
 "random": result,

// //i give up = a new round starts
//   'I give up': giveUp,
// //Say it again = a hint ( the voice repeats)
//   'Say it again': function () {
//      sayBackwards($correctButton.text()
//    );
//  }
};

// Add our commands to annyang
annyang.addCommands(commands);

// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
}
}
var customName = document.getElementById('customName');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');


function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
  "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

var insertY = ["the soup kitchen", "Disneyland", "the White House"];

var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];




function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);

  if (customName.value == "") {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

  //LATER
//   $initialPage = $("#initial");
//   $mainPage = $("#main");
//   // The sign in page reappear
// $initialPage.css('display','block');
//   $('#signButton').on('click',signIn);




//=======================Sing In Page===============================// WILL ADD LATER
// function signIn() {
//   $initialPage.css('display','none');
//   $mainPage.css('display','block');
// }













// let $leftChoice;
// let $rightChoice;
// //each wrong guess scares more kids
// let money = 0;
//
// //An array of creepy clickbait thumbnails found online
// let clickbait = [
//   "no1.jpg",
//   "no2.jpg",
//   "no3.jpg",
//   "no4.jpg",
//   "no5.jpg",
//   "no6.jpg",
//   "no7.jpg",
//   "no8.jpg",
//   "no9.jpg",
//   "no10.jpg",
//   "no11.jpg"
//
// ]
//
// //an array of actual thumbnails that kids friendly
// let friendly = [
//   "yes1.jpg",
//   "yes2.jpg",
//   "yes3.jpg",
//   "yes4.jpg",
//   "yes5.jpg",
//   "yes6.jpg",
//   "yes8.jpg",
//   "yes9.jpg",
//   "yes10.jpg",
//   "yes11.jpg"
// ]
//
//
// $(document).ready(setup);
//
//
//
// function setup(){
//   $leftChoice = $('#left');
//   $rightChoice = $('#right');
//   //for a new round to begin
//   newRound();
//   if (annyang) {
//
// // Let's define our first command. First the text we expect, and then the function it should call
// var commands = {
// //the player guesses the animal, if then the games handles the guess
//  "I think it is number one": handleVoiceGuess1,
//  "I think it is number two": handleVoiceGuess2,
// // //i give up = a new round starts
// //   'I give up': giveUp,
// // //Say it again = a hint ( the voice repeats)
// //   'Say it again': function () {
// //      sayBackwards($correctButton.text()
// //    );
// //  }
// };
//
// // Add our commands to annyang
// annyang.addCommands(commands);
//
// // Start listening. You can call this here, or attach this call to an event, button, etc.
// annyang.start();
// }
// }
//
// function handleVoiceGuess1(){
// if($leftChoice= clickbait){
// console.log('correct');
// // newRound();
// }
// else{
// console.log('wrong');
// moneyCount(money + 2942);
// }
//
// }
//
// function handleVoiceGuess2(){
//   if($rightChoice== clickbait){
// console.log('correct');
// // newRound();
//   }
//   else{
// console.log('wrong');
// moneyCount(money + 2942);
//   }
//
//   }
//
//   function moneyCount(newAmount){
//   //Updates the score depending on the guess (right or wrong)
//  money= newAmount;
//  $(".score").text(money);
// }
//
//
// function newRound(){
//   //we have to create a 1/2 chance to get a good or a bad thumbnail for each div
//   let r = Math.random();
//
//   if (r > 0.5){
//     $leftChoice.attr('src','assets/images/notok/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
//     $rightChoice.attr('src','assets/images/ok/' + friendly[Math.floor(Math.random() * friendly.length)]);
//   }
//
//   else {
//     $leftChoice.attr('src','assets/images/ok/' + friendly[Math.floor(Math.random() * friendly.length)]);
//     $rightChoice.attr('src','assets/images/notok/' + clickbait[Math.floor(Math.random() * clickbait.length)]);
//   }
//
//   //checkAnswer();
// }

// function checkAnswer(){
//
//   // linking the variables
//   if (animalGuess === $correctButton.text()) {
//     // updating the score()
//     scoreCount(score +1);
//     // removes the buttons
//     $('.guess').remove();
//     // time delay
//     setTimeout(newRound, 1000);
//
//   } else {
//     // shake event
//     $('.guess').effect('shake');
//
//     // says answer backwards
//     sayBackwards($correctButton.text());
//   }
// }

//
// $( function() {
//     $( "#bar" ).progressbar({
//       background: 'green',
//       value: 80
//     });
//   } );
