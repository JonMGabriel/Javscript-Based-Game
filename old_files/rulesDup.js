//TO DO:
//the first incorrect match is fine, but then the second try doesnt work for anything
//      might have to do with my logic around the areas where ive used dfasas.revealed
//-Implement: updateCSSFlip(), correctGuess(), and incorrectGuess()


//***bonus*** Implement score (& high score?)
//***bonus*** shuffle()

//***bonus*** implement a size (e.g. 5x5) input box. press startgame button, draws board


// updateCSSflip(): it's using the transition CSS but it isn't using the
// flip CSS code. http://codepen.io/JonMGabriel/pen/PZJVQv <-- my code pen
// that doesn't seem to transfer over to our design. Still trying to implement
// the animation to cells in our table.

// correctGuess(): so I kind of wrote a generic guess function. I have not tested it yet
// but the function, hypothetically, should return true if two guesses are a match
// and return false if it isn't a match. So we may not have to write incorrectGuess();
// if you could please check my logic and somehow test the newly written function
// in comparison to where you might have used it in other parts of the script, that'd be
// great



/************************/
/******** MODEL *********/
/************************/



/* constructor: imageObj (null -> object)
    imageObj creates an object...(write more) */
//maybe rename to "Tile"
var ImageObj = function(img){
    this.img = img;
    this.revealed = false; // on incorrect matches, revealed has to be turned back to false
};
  
//returns bool to indicate whether the VIEW should flip the tile up or flip both down
ImageObj.prototype.clicked = function(ev, index, gameBrain){
    if(gameBrain.indexLastFlipped > -1){
        if(gameBrain.board[gameBrain.indexLastFlipped].img.classList.item(1) == ev.currentTarget.classList.item(1)){ //i dont like to hardcode the array position, but we may just want to do this. or use id's or mess around with how we do stuff along those lines
                console.log("CORRECT MATCH");
                gameBrain.indexLastFlipped = -1;
                // gameBrain.itsAMatch(); //Do score stuff
        }
        else{
            console.log("INCORRECT MATCH");
            gameBrain.board[index].revealed = false;
            gameBrain.board[gameBrain.indexLastFlipped].revealed = false;
            gameBrain.indexLastFlipped = -1;
            // gameBrain.incorrectGuess(); //Do score stuff
            return false; //Returns false if an incorrect match and should flip down both tiles
        }
    }
    else
        gameBrain.indexLastFlipped = index;
        
    gameBrain.board[index].img.revealed = true;
    return true; //Returns false if an incorrect match, true otherwise
};

//      func incorrectGuess()
//          gameBrain.incorrectGuesses++;
        // if(gameBrain.incorrectGuesses % 3 > 3)
        //     gameBrain.shuffle();

// func correct guess
    //gameBrain.correctGuesses++;

    
/* function correctGuess (element_1, element_2, gameBrain -> boolean)
    correctGuess will take in three parameters and produce a boolean
    as to whether or not a correctGuess was made between element_1 and 2.*/

var correctGuess = function(element_1, element_2, gameBrain){
    // correctGuess depends on the class name matches?
    // grabbing the correct class based on a generic class we're grabbing
    
    // so to my understanding, getElementsByClassName will return an array
    // and in our case the array will simply be two images
    var element_1_class = document.getElementsByClassName(element_1);
    var element_2_class = document.getElementsByClassName(element_2);
    
    var match = false; // our global checker


    // these two loops are going to have to parse the two arrays to see if
    // element_1 exists in element_2's array
    
    for (var i = 0; i < element_1_class.length; i++){ // searches through the first array
        var checker = element_1_class[i]; // grabs the element in index[i] in the first array
        
        for (var j = 0; j < element_2_class.length; j++) { // searches through the second array
            var comparison = element_2_class[j]; // grabs the element in index[j] in the second array
            if (checker == comparison){ // if index[i] = index [j] (then runs through all of j)
                match = true; // sets our variable outside equal to true
                gameBrain.correctGuesses++; // updates the counter
            }
            else { // this condition might need to be changed so that 
                // incorrect guesses counter isn't updated here since
                // the loop could be run a few times without finding
                // a match
                return false;    
            }
        }
    }
    
    return match; // returns whether or a correctGuess was made
};

// HAVE NOT TESTED CORRECTGUESS YET //



/************************/
/********* VIEW *********/
/************************/

/* render (GameBrain -> void)
        draws the full board
        triggered on init.; shuffle; ...
        
        can be renamed, drawBoard
*/
// var render = function(theBrain){
//   $screen = document.querySelector('#display');
//   $screen.innerHTML = "";
//   theBrain.heroes.forEach(function(hero){
//     $hero = document.createElement('div');
//     $hero.classList.add('hero');
//     if (hero.sick){
//       $hero.classList.add('sick');
//     }
//     $hero.style.left = (hero.x*squareWidth).toString()+"px";
//     $hero.style.top = (hero.y*squareWidth).toString()+"px";
//     $hero.innerHTML = hero.name;
//     $screen.appendChild($hero);
//   });


    // theBrain.board.forEach(....);
// };



/*  func: reveal (image -> image)
    reveal takes in an image (hidden with CSS) and produces the image revealed
    without blocked out CSS still need to write this */
var reveal = function (image) {
    var image_list = []; // still needs to grab the CSS
};

// give it an array index?
// does the CSS flip stuff on the CSS container/image (not really sure how exactly to do animation/flip thing yet)
// gets what to do stuff on based on the object referenced from the array index?

// Reading up on CSS animations


var updateCSSFlip = function(anImage, flipUp){ //so we may not even really need this as a function?
    if(flipUp){
        anImage.style.backgroundColor = "blue";
        
        anImage.classList.toggle('flipped');
        console.log("flipped");
    }
    else{
        anImage.style.backgroundColor = "red";
        
        anImage.classList.toggle('flipped');
        console.log("unflipped");
    }
};



// sound function (on correct match, sound is invoked)
//var sound = function () {
//};

var cards = [
    {name: "lion", img: "http://i4.mirror.co.uk/incoming/article5803160.ece/ALTERNATES/s615/Lion-park.jpg",
        id: 1},
    {name: "snake", img: "http://theblot.com/wp-content/uploads/2013/11/dragonsnake.jpg",
        id: 2},
    {name: "zebra", img: "http://everythreeweekly.com/wp-content/uploads/2015/12/zebra-on-the-Serengeti-dines-casually-near-road.jpg",
        id: 3} ];

/************************/
/****** CONTROLLER ******/
/************************/


//GameBrain might be MODEL, and MAIN might be CONTROLLER...not sure yet
var GameBrain = function(imageList){
    var theBrain = this;
    this.keepPlaying = true;
    this.board = imageList;
    this.indexLastFlipped = -1;
    // this.indexLastFlipped = 1; //test
    
    this.correctGuesses = 0;
    this.incorrectGuesses = 0;
    this.score = 0;
    
    var shuffle = function(){
        console.error("Please write shuffle()");
//      newArray.push(old.splice(floor(random() * old.length), 1, ...));
//      retain positions of flipped elements
    };
        
    this.quit = function(){
        theBrain.keepPlaying = false;
    };
};






/************************/
/********* MAIN *********/
/************************/
var startApp = function(){
    document.body.removeEventListener('click', startApp);
    
    var imageEl = document.getElementsByClassName("animal");
    var imageList = [];
    Array.prototype.forEach.call(imageEl,
        function(currentValue, index, array){
            imageList.push(new ImageObj(currentValue));
            currentValue.addEventListener("click",
                ev=>{
                    if(!ev.currentTarget.revealed){ //if this is not already revealed
                        updateCSSFlip(ev.currentTarget, true); //In either/any case, we'll always be flipping up the current target here
                        
                        var backupIndex = gameBrain.indexLastFlipped;
                        var flipItOrNaw = ImageObj.prototype.clicked(ev, index, gameBrain);
                        if(!flipItOrNaw){ //indexLastFlipped will be greater than -1 if this has been triggered
                            updateCSSFlip(ev.currentTarget, false);
                            updateCSSFlip(gameBrain.board[backupIndex].img, false);
                        }
                    }
                    else console.log("CLICKED ON SAME IMAGE");
                });
    });
    var gameBrain = new GameBrain(imageList);
    
    //*********Main*********//
    //have button listener to reset the board? instead of main loop thing
    var mainLoop = function(){
        if(gameBrain.keepPlaying){
            gameBrain.update();
            //   render(gameBrain); //maybe dont need this [here], because we only need to update the view if a click event happens
            window.setTimeout(mainLoop, 2000); //redraw every 2 seconds (this is number of milliseconds till called again)
        }
        else{
            document.body.innerHTML = "Game Over. If you feel like you've won then you've won.  Click to play again.";
            document.body.addEventListener('click', startApp);
        }
    };
//  mainLoop(); //don't need to loop?
};

document.addEventListener("DOMContentLoaded", startApp);
// maybe on load event, addEventListener to a start button



