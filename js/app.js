'use strict';

var sec = 60;

// DONE: create userArray to store all user objects
// will add more user objects are more users play the game.
// changed to assign to constructor to make it clear what the array belongs to

User.userArray = [];

// DONE: create colorArray for balloons (two colors for now)
// will add more once some testing is completed
// changed to assign to constructor to make it clear what the array belongs to
Balloon.colorArray = ['red', 'blue'];

// DONE: create imageSrcArray for balloons (two colors for now)
// will add more once some testing is completed
// changed to assign to constructor to make it clear what the array belongs to
Balloon.imageSrcArray = ['assets/red-balloon.png', 'assets/blue-balloon.png'];

// DONE: create balloonArray to store all balloon objects
// will add more balloon objects are more colors and image src are added into the other arrays.
// refer to createBalloon function
// changed to assign to constructor to make it clear what the array belongs to

Balloon.balloonArray = [];

// DONE: create random color generator, this is a random number that doesn't exceed the length of the colorArray
// this will then be used as the placement in the function to generate the random color
function colorGenerator() {
  var randomNumber = Math.floor(Math.random() * Balloon.colorArray.length);
  // DONE: use random number generator to pick random color from array
  var randomColor = Balloon.colorArray[randomNumber];
  return randomColor;
}
colorGenerator();



// DONE: create constructor for Balloons
// color will be rendered from color array; will not be "this.color = color;"
// for example: this.color = colorArray;
function Balloon (index) {
  // this.color is the index of the colorArray to make it dynamic
  this.color = Balloon.colorArray[index];
  //this.image is the source of the image in imageSrcArray(same index as the color it is assigned to)
  this.imageSrc = Balloon.imageSrcArray[index];
}

// DONE: create new Balloon objects - one for each color in the color array
// this function will create all balloon objects for as long as there is information in the 2 referenced arrays
// then it will push the objects into the balloon array
// no return is needed for this function, if you need access to the objects reference the balloonArray
function createBalloon() {
  for(var i in Balloon.colorArray) {
    var myBalloon = new Balloon(i);
    Balloon.balloonArray.push(myBalloon);
  }
}
createBalloon();


// DONE: create constructor for user
// left out favorite color, will need to add later for the stretch goal
// name refers to the users name in the input field in the form 'event.target.value'
// this constructor will be referenced in the form event handler
// currentScore will be incremental during the gaming process and will be vital in calculating the highscore
// to calculate highScore you will see if currentScore is higher than the current highScore and replace highScore if currentScore is
// higher or keep the highScore as is
// push currentScore into allScores
// allScores is an array of all the scores/attempts at playing the game
function User(name) {
  this.name = name;
  this.currentScore = 0;
  this.highScore = 0;
  this.allScores = [];
  // TODO: within constructor, push user into userArray using 'includes' method (to avoid duplicates)
  // this is a stretch goal
  User.userArray.push(this);
}

// TODO: create renderButton function




// TODO: create renderCountdown function



// TODO: create renderCurrentScore function
function renderCurrentScore() {
  var targetDiv = document.getElementById('game');
  var createH3 = document.createElement('h3');
  createH3.textContent = 'Current Score: ' + User.userArray[User.userArray.length-1].currentScore;
  targetDiv.appendChild(createH3);
}



// TODO: create renderAll function
// TODO: invoke all render functions



// DONE: create event listener for form
// this will be targetting the submit/play button
var formSubmission = document.getElementById('form');
formSubmission.addEventListener('submit', submitHandler);


// DONE: create an event handler for form
function submitHandler(event) {

  event.preventDefault();
  var userValue = document.getElementById('name');
  var newUser = new User(userValue.value);
  //TODO: do not proceed if the entered value in the input field is name(stretch goal)
  // DONE: once submit is clicked, clear page
  var target = document.getElementById('deleteMe');
  target.innerHTML = '';
  var gameContainer = document.getElementById('gameContainer')
  var createDiv = document.createElement('div')
  createDiv.id = 'game';
  target.appendChild(createDiv);
  renderCurrentScore();
  renderBalloons();

  // DONE: call renderAll function
  // renderAll();
}


// TODO: create renderBalloons function
function renderBalloons() {
  var divEl = document.getElementById('game');
  // will need a random generator for the x and the y position
  // this will need to generate each time the for loop runs
  // the image being rendered is hard coded, will need to make this dynamic and only pull the image that we want it to be
  // will need to make the number of images rendered to be dynamic based on time passed etc


  //   variable to store balloon count, need to increase number of balloons when we render to the screen each time
  //   render balloons to the page the first time using balloon count
  //  render balloons to the page every x seconds using the increased balloon count
  var balloonCount = 6;



  var balloonRender = setInterval (function(){
    console.log(sec);



    for (var i = 0; i < balloonCount; i++){//loop for the target balloons
      // need to generate random numbers for createImg.style.left and createImg.style.top
      // top range between something like 50 and 1000 and left range something like 0 to 1450 (need to make sure the balloons are within the background image)
      // may need to add an id to the balloons depending on the click event handler functionality
      var createImg = document.createElement('img');
      createImg.src = Balloon.imageSrcArray[0];
      createImg.style.position = 'absolute';
      createImg.style.left = 0+'px';
      createImg.style.top = 100+'px'; // min 100 px
      createImg.style.height = '100px';
      divEl.appendChild(createImg);
    }
    balloonCount = balloonCount + 6;
    console.log('balloon count: ' + balloonCount);

    // add another for loop for the other balloons (non-target)
    // need a different balloon count variable - this loop should create more balloons than the first one
    // this loop will create the balloons of random colors - like previous for loop but using random colors from the color array that aren't 0
    // may need to add an id to the balloons depending on the click event handler functionality
    sec = sec - 5;

    console.log('sec minus 5: ', sec);
    if (sec < 0) {
      clearInterval(balloonRender);
    }

  }, 5000);





  // }
}









// DONE: create startTimer function
//TODO: create a <div> and id for the timer in the HTML for it to display on the page
//TODO: bind the timer to the event
function timer(){
  var timer = setInterval(function(){
    document.getElementById('game').innerHTML='00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}


// TODO: add event listener for start button
// TODO: invoke renderBalloons function
// TODO: invoke startTimer functions
// TODO: invoke startGame function



// TODO: create addEventListener function for clicking of balloons



// TODO: create startGame function
// TODO: when balloon is clicked, remove from array
// TODO: if color === 'selected-color', add points to score
// TODO: else color !== 'selected-color', remove points from score



// TODO: create endGame function
// TODO: push totalScore into array
// DONE: store userArray array in local storage
//storing userArray because all user score info should have been updated in the User object and pushed to userArray

var stringyUserResults = JSON.stringify(User.userArray);
localStorage.setItem('resultsInLocalStorage', stringyUserResults);



// TODO: remove all event listeners
// TODO: send user to results page



// TODO: invoke endGame function
// TODO: delay start of invocation of function
