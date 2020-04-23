'use strict';



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

// Balloon.balloonArray = [];

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
// function createBalloon() {
//   for(var i in Balloon.colorArray) {
//     var myBalloon = new Balloon(i);
//     Balloon.balloonArray.push(myBalloon);
//     console.log(myBalloon);
//     // myBalloon.addEventListener('click', function(){
//     //   myBalloon.remove();
//     // })
//   }
// }
// createBalloon();


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


// TODO: create renderCurrentScore function
function renderCurrentScore() {
  var targetDiv = document.getElementById('game');
  var createH3 = document.createElement('h3');
  createH3.id = 'currentScore';
  createH3.innerHTML = 'Current Score: ' + User.userArray[User.userArray.length -1].currentScore;
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
  var gameContainer = document.getElementById('gameContainer');
  var createDiv = document.createElement('div');
  createDiv.id = 'game';
  target.appendChild(createDiv);
  renderCurrentScore();
  var divEl = document.getElementById('game');
  var anotherH3 = document.createElement('h3');
  anotherH3.id = 'clickAnywhere';
  anotherH3.textContent = 'Click anywhere to begin';
  divEl.appendChild(anotherH3);
  // DONE: invoke startTimer functions
  // DONE: invoke startGame function
  startTimer();
  startBalloons();
  // DONE: call renderAll function
  // renderAll();
}



// DONE: create renderBalloons function
function renderBalloons() {
  stopBalloons();
  var divEl = document.getElementById('game');
  divEl.addEventListener('click', function(event){
    console.log(event.target.id);
    if(event.target.id === 'red'){
      // DONE: if color === 'selected-color', add points to score
      User.userArray[User.userArray.length -1].currentScore++;
    }
    else if(event.target.id === 'blue') {
      // DONE: else color !== 'selected-color', remove points from score
      User.userArray[User.userArray.length -1].currentScore--;
    }
    renderCurrentScore();
    document.getElementById('currentScore').remove();
    if(event.target.tagName === 'IMG'){
      // DONE: when balloon is clicked, remove from DOM
      event.target.remove();
    }
  });
  // will need a random generator for the x and the y position
  // this will need to generate each time the for loop runs
  // the image being rendered is hard coded, will need to make this dynamic and only pull the image that we want it to be
  // will need to make the number of images rendered to be dynamic based on time passed etc


  //   variable to store balloon count, need to increase number of balloons when we render to the screen each time
  //   render balloons to the page the first time using balloon count
  //  render balloons to the page every x seconds using the increased balloon count
  var balloonCount = 1;
  var randomBalloon = 2;
  var sec = 25;
  var createImg = document.createElement('img');
  var newBalloon = new Balloon(0);
  // createImg.addEventListener('click', function(){
  //   createImg.remove();
  // });
  var balloonLeft = Math.floor(Math.random() * (1400 - 0 + 1) + 0);
  var balloonTop = Math.floor(Math.random() * (600 - 100 + 1) + 100);
  createImg.src = newBalloon.imageSrc;
  createImg.id = newBalloon.color;
  createImg.style.position = 'absolute';
  createImg.style.left = balloonLeft+'px';
  createImg.style.top = balloonTop+'px'; // min 100 px
  createImg.style.height = '100px';
  divEl.appendChild(createImg);
  balloonCount = balloonCount + 1;
  balloonLeft = Math.floor(Math.random() * (1400 - 0 + 1) + 0);
  balloonTop = Math.floor(Math.random() * (600 - 100 + 1) + 100);
  var randomIndex = Math.floor(Math.random() * Balloon.colorArray.length);
  createImg = document.createElement('img');
  var newRandomBalloon = new Balloon(1);
  createImg.id = newRandomBalloon.color;
  createImg.src = newRandomBalloon.imageSrc;
  createImg.style.position = 'absolute';
  createImg.style.left = balloonLeft+'px';
  createImg.style.top = balloonTop+'px'; // min 100 px
  createImg.style.height = '100px';
  divEl.appendChild(createImg);
  randomBalloon = randomBalloon + 2;


  var balloonRender = setInterval (function(){



    for (var i = 0; i < balloonCount; i++){//loop for the target balloons
      // need to generate random numbers for createImg.style.left and createImg.style.top
      // top range between something like 50 and 1000 and left range something like 0 to 1450 (need to make sure the balloons are within the background image)
      // may need to add an id to the balloons depending on the click event handler functionality
      var createImg = document.createElement('img');
      var newBalloon = new Balloon(0);
      // createImg.addEventListener('click', function(){
      //   createImg.remove();
      // });
      var balloonLeft = Math.floor(Math.random() * (1400 - 0 + 1) + 0);
      var balloonTop = Math.floor(Math.random() * (600 - 100 + 1) + 100);
      createImg.src = newBalloon.imageSrc;
      createImg.id = newBalloon.color;
      createImg.style.position = 'absolute';
      createImg.style.left = balloonLeft+'px';
      createImg.style.top = balloonTop+'px'; // min 100 px
      createImg.style.height = '100px';
      divEl.appendChild(createImg);
    }
    balloonCount = balloonCount + 1;
    for (i = 0; i < randomBalloon; i++){//loop for the target balloons
      // need to generate random numbers for createImg.style.left and createImg.style.top
      // top range between something like 50 and 1000 and left range something like 0 to 1450 (need to make sure the balloons are within the background image)
      // may need to add an id to the balloons depending on the click event handler functionality
      balloonLeft = Math.floor(Math.random() * (1400 - 0 + 1) + 0);
      balloonTop = Math.floor(Math.random() * (600 - 100 + 1) + 100);
      var randomIndex = Math.floor(Math.random() * Balloon.colorArray.length);
      createImg = document.createElement('img');
      var newRandomBalloon = new Balloon(1);
      createImg.id = newRandomBalloon.color;
      createImg.src = newRandomBalloon.imageSrc;
      createImg.style.position = 'absolute';
      createImg.style.left = balloonLeft+'px';
      createImg.style.top = balloonTop+'px'; // min 100 px
      createImg.style.height = '100px';
      divEl.appendChild(createImg);
    }
    randomBalloon = randomBalloon + 2;

    // add another for loop for the other balloons (non-target)
    // need a different balloon count variable - this loop should create more balloons than the first one
    // this loop will create the balloons of random colors - like previous for loop but using random colors from the color array that aren't 0
    // may need to add an id to the balloons depending on the click event handler functionality
    sec = sec - 5;
    if (sec < 0) {
      clearInterval(balloonRender);
    }

  }, 5000);





  // }
}









// DONE: create startTimer function

// DONE: add event listener for starting the timer
function startTimer() {
  var timerEvent = document.getElementById('game');
  timerEvent.addEventListener('click', handleTimer);
}

function startBalloons() {
  // DONE: create addEventListener function for clicking of balloons
  var balloonEvent = document.getElementById('game');
  balloonEvent.addEventListener('click', renderBalloons);
}
function stopBalloons() {
  document.getElementById('game').removeEventListener('click', renderBalloons);
}

function stopTimer() {
  var timerEvent = document.getElementById('game');
  timerEvent.removeEventListener('click', handleTimer);
}

//DONE: bind the timer to the event
function handleTimer(event){

  //DONE: create a <h3> and id for the timer in the HTML for it to display on the page
  var sec = 30;
  var timer = setInterval(function(){
    document.getElementById('timer').innerHTML='00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      endGame();

    }
  }, 1000);
  timerRender(timer);
}

function timerRender(interval) {
  var divEl = document.getElementById('game');
  var createH3 = document.createElement('h3');
  createH3.textContent = interval;
  createH3.id = 'timer';
  divEl.appendChild(createH3);

  var h3 = document.getElementById('clickAnywhere');
  h3.remove();
  stopTimer();
}













// TODO: create endGame function

function endGame() {
  // TODO: push currentScore into array
  User.userArray[User.userArray.length -1].allScores.push(User.userArray[User.userArray.length -1].currentScore);
  // DONE: store userArray array in local storage
  //storing userArray because all user score info should have been updated in the User object and pushed to userArray
  var stringyUserResults = JSON.stringify(User.userArray);
  localStorage.setItem('resultsInLocalStorage', stringyUserResults);
  // DONE: send user to results page
  window.location.pathname = '/results.html';
}
