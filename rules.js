//TO DO:
//the first incorrect match is fine, but then the second try doesnt work for anything
//      might have to do with my logic around the areas where ive used dfasas.revealed
//-Implement: updateCSSFlip(), correctGuess(), and incorrectGuess()


//***bonus*** Implement score (& high score?)
//***b*** shuffle()

//***bonus*** implement a size (e.g. 5x5) input box. press startgame button, draws board






/************************/
/******** MODEL *********/
/************************/


//*****Is this this correct or ok coding practice, using the prototype like that?
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
        if(gameBrain.board[gameBrain.indexLastFlipped].img.classList.item(gameBrain.board[gameBrain.indexLastFlipped].img.classList.length - 1)
            == ev.currentTarget.classList.item(ev.currentTarget.classList.length - 1)){ //might want to justs hardcode as "1"
                console.log("CORRECT MATCH");
                gameBrain.indexLastFlipped = -1;
                // gameBrain.itsAMatch();////////////////!!////////!!!//////need to change css for these...maybe this isn't the place for these then?
        }
        else{
            console.log("INCORRECT MATCH");
            // gameBrain.incorrectGuess();/////!/////////!!////////!!!////////////////
            gameBrain.board[index].revealed = false;
            gameBrain.board[gameBrain.indexLastFlipped].revealed = false;
            gameBrain.indexLastFlipped = -1;
            return false;
        }
    }
    else
        gameBrain.indexLastFlipped = index;
    // console.log(gameBrain.board[index]);
    gameBrain.board[index].img.revealed = true;
    return true; //true to flip up //false to flip back down, remember to gameBrain.indexLastFlipped = -1
};

//      func incorrectGuess()
//          gameBrain.incorrectGuesses++;
        // if(gameBrain.incorrectGuesses % 3 > 3)
        //     gameBrain.shuffle();

// func correct guess
    //gameBrain.correctGuesses++;




/************************/
/********* VIEW *********/
/************************/

/* render (GameBrain -> void)
        draws the full board
        triggered on init.; shuffle; ...
        
        can be renamed, drawBoard
*/
var render = function(theBrain){
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
};



/*  func: reveal (image -> image)
    reveal takes in an image (hidden with CSS) and produces the image revealed
    without blocked out CSS still need to write this */
var reveal = function (image) {
    var image0 = document.getElementsByClassName("animal"); // still needs to grab the CSS
};
// give it an array index?
// does the CSS flip stuff on the CSS container/image (not really sure how exactly to do animation/flip thing yet)
// gets what to do stuff on based on the object referenced from the array index?


var updateCSSFlip = function(anImage, prevClickedImage, toFlip){
    // alert(anImage.style);
    if(toFlip){
        //Do cool stuff to flip this tile up
        anImage.style.backgroundColor = "blue";
    }
    else{
        //prevClickedImage must exist if this is triggered, but I put a check when updateCSSFlip is called, anyway
        //flip both down
        prevClickedImage.style.backgroundColor= "red";
        anImage.style.backgroundColor = "red";
    }
}


// sound function (on correct match, sound is invoked)
//var sound = function () {
//};

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
                    if(!gameBrain.board[index].revealed){ //if this is already revealed, then I'm clicking on something i've already clicked on
                        var origIndex = gameBrain.indexLastFlipped;
                        var flipItOrNaw = ImageObj.prototype.clicked(ev, index, gameBrain);
                        if(gameBrain.indexLastFlipped > -1) //so this was a first tile selection, so it should be flipped up (flipItOrNaw == true)
                            updateCSSFlip(ev.currentTarget, gameBrain.board[gameBrain.indexLastFlipped].img, true);
                        else{
                            updateCSSFlip(ev.currentTarget, gameBrain.board[index].img, true);
                            window.setTimeout({}, 2500); //pause for 2.5 seconds then flip both back // i dont think this is right maybe
                            updateCSSFlip(ev.currentTarget, gameBrain.board[origIndex].img, false);
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

