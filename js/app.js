// DONE: create userArray
// this array will store all user information
var userArray = [];



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

// DONE: create userArray to store all user objects
// will add more user objects are more users play the game. 
// changed to assign to constructor to make it clear what the array belongs to

User.userArray = [];


// TODO: create random color generator
    // TODO: use random number generator to pick random color from array



// DONE: create constructor for Balloons
    // color will be rendered from color array; will not be "this.color = color;"
    // for example: this.color = colorArray;
function Balloon (color, imageSrc) {
    // this.color is the index of the colorArray to make it dynamic
    this.color = Balloon.colorArray[color];
    //this.image is the source of the image in imageSrcArray(same index as the color it is assigned to)
    this.imageSrc = Balloon.imageSrcArray[imageSrc];
}



// DONE: create new Balloon objects - one for each color in the color array
// this function will create all balloon objects for as long as there is information in the 2 referenced arrays
// then it will push the objects into the balloon array
// no return is needed for this function, if you need access to the objects reference the balloonArray
function createBalloon() {
    for(i in Balloon.colorArray) {
        var myBalloon = new Balloon(i,i);
        Balloon.balloonArray.push(myBalloon);
    }
}
createBalloon();


// DONE: create constructor for user
// left out favorite color, will need to add later for the stretch goal
// name refers to the users name in the input field in the form 'event.target.value'
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



// TODO: create renderCSSOnElement function



// TODO: create renderCountdown function



// TODO: create renderTotalScore function



// TODO: create renderAll function
    // TODO: invoke all render functions



// TODO: create event listener for form



// TODO: create an event handler for form
      // TODO: once submit is clicked, clear page
      // TODO: call renderAll function



// TODO: create renderBalloons function



// TODO: create startTimer function



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
    // TODO: store totalScore array in local storage
    // TODO: remove all event listeners
    // TODO: send user to results page


    
// TODO: invoke endGame function
    // TODO: delay start of invocation of function