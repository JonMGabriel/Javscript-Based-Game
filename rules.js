/*  constructor: createImage (null -> object)
    createImage creates an object with attributes (src, alt, title)
    with parameters specified with (src, title)
*/

// our variabels
var correct;
var incorrect; //updates on each mismatched string comparison (on certain amount of incorrects game shuffles)
var score;
// 


var image_array = []; //in ORDER of how they show up on the board. either that or have x and y coordinate in ImageObj
//this is an array of ImageObj's?

image_array.push(createImage("", "lion")); // we could host these pictures within c9
image_array.push(createImage("", "snake")); // or we could reference them somehow

    


// flip function (css animation)



// sound function (on correct match, sound is invoked)


// on click the image is revealed
//      perhaps on click, implement update...() which calls a bunch of other update functions (e.g. match(), flip(), playSound(), etc.)
document.getElementsByClassName("animal").addEventListener("click", reveal);





// updateTiles: (Tile[] -> Tile[]) ???
//      if(tile revealed already)
//          check to see if match
//      else


/*
in controller
    var something = getBoard
                        gets image table
                        returns image tag []


*/





/************************/
/******** MODEL *********/
/************************/

/* constructor: imageObj (null -> object)
    imageObj creates an object...(write more) */
//maybe rename to "Tile"
var ImageObj = function(src, title){
    var createImage = function(src, title) {
        var img   = new Image();
        img.src   = src;
        img.alt   = title;
        img.title = title;
        return img;
    };
    
    // Index in array of previously matched thing
    //**OR maybe** when calling
    //      if(prvclckdindex > -1) { imageobj.match(board[previousclickedindex]); }
    var match = function(index){
        
        
        return false;
    }
    // match function (comparing correctness)
    //      (assuming controller obj holds this info)
    //        variable in overarching class, holds array index of image
    //      if array index = -1
    //          nothing has been clicked yet
    //      else
    //          check if title of obj at index = title of clickedImg.title
    //              if yes, flip()
    //              if no, trigger incorrectGuess()
    //                  reflip both images
    
    
    this.img0 = createImage(src, title);
    this.revealed = false; // on incorrect matches, revealed has to be turned back to false
};






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
    theBrain.board.forEach(....);
};



/*  func: reveal (image -> image)
    reveal takes in an image (hidden with CSS) and produces the image revealed
    without blocked out CSS still need to write this */
var reveal = function (image) {
    var image = document.getElementsByClassName("animal"); // still needs to grab the CSS
};
// give it an array index?
// does the CSS flip stuff on the CSS container/image (not really sure how exactly to do animation/flip thing yet)
// gets what to do stuff on based on the object referenced from the array index?




/************************/
/****** CONTROLLER ******/
/************************/


//GameBrain might be MODEL, and MAIN might be CONTROLLER...not sure yet
var GameBrain = function(){
    this.keepPlaying = true;
    var theBrain = this;
    
    // preexisting board possibilities 
    // this.board = getBoard();
    //      array of ImageObj
    
    
    this.quit = function(){
        this.keepPlaying = false;
    };
    this.update = function(){
        //do board and other update shit
        //do we have anything to update even?
        //      nothing is moving or time based
        //      maybe for score stuff?
    };
    
    // this.
};


// ***bonus added*** shuffle function()
//      newArray.push(old.splice(floor(random() * old.length), 1, ...));
//      retain positions of flipped elements




/************************/
/********* MAIN *********/
/************************/
var gameBrain;
var startApp = function(){
  document.body.removeEventListener('click', startApp);
//   document.body.innerHTML = '<div id="quit">Click to quit</div><div id="addHero">Click to add hero</div><div id="display"></div>';
  gameBrain = new GameBrain();
  //****controller stuff here:
  document.querySelector('#quit').addEventListener('click', function(){
      //remove tile click listener?
    gameBrain.quit();
  });
//   document.querySelector('#addHero').addEventListener('click', function(){
//     gameBrain.addHero();
//   });

  //****main engine stuff here
  
  // for each in gameBrain.board (array of ImgObj)
      //Add click listener
  
  var mainLoop = function(){
    if(gameBrain.keepPlaying){
      gameBrain.update();
    //   render(gameBrain); //maybe dont need this [here], because we only need to update the view if a click event happens
      window.setTimeout(mainLoop, 2000); //redraw every half second (this is number of milliseconds till called again)
    }
    else{
    //   document.body.innerHTML = "Game Over. If you feel like you've won then you've won.  Click to play again.";
      document.body.addEventListener('click', startApp);
    }
  }
//   mainLoop(); //don't need to loop?
}

document.addEventListener("DOMContentLoaded", startApp);
//maybe on load event, addEventListener to a start button

