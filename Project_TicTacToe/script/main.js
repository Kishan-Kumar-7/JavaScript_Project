//This variable keeps track of whoes turn it is.
let activePlayer = "X";

//This array stores an array of moves. We use this to determine win conditions.
let selectedSqueres = [];

//this function is for placing an X or O in a squere.
function placeXorO(squareNumber) {
  //this function takes a string parameter of the path you set earlier for placement sound('./media/place.mp3')
  function audio(audioURL) {
    //we create a new audio object and we pass the apth as a parameter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();
  }
  //This condition ensures a squre hasn't been selected already.
  // the .some() method is used to check each element of the selectSquere array to see if it contains the square number clicked on.
  if (!selectedSqueres.some((element) => element.includes(squareNumber))) {
    //this variable retrieves the HTML element id that was clicked.
    let select = document.getElementById(squareNumber);
    // This condition checks who's turn it is.
    if (activePlayer === "X") {
      //if activePlayer is equal to 'X' the x.png is placed in HTML
      select.style.backgroundImage = 'url("images/x.png")';
      // Active player may ony be 'X' or 'O' so, if not 'X' it must be 'O'
    } else {
      //if activePlayer is equal to 'O' the o.png is placed in HTMl
      select.style.backgroundImage = 'url("images/o.png")';
    }
    //squereNumber and activePlayer are concatenated together and added to array.
    selectedSqueres.push(squareNumber + activePlayer);
    //this calls a function to check for any win conditions.
    checkWinConditions();
    //this condition is for changing the active player
    if (activePlayer === "X") {
      //if activePlayer is 'X' change it to 'O'
      activePlayer = "O";
      //if active Player is anything other than 'X'
    } else {
      //change the activeplayer to 'X'
      activePlayer = "X";
    }

    //this function makes our body element temporarily unclickable.
    function disableClick() {
      //this makes our body unclickable.
      body.style.pointerEvents = "none";
      //This makes our body clickable again after 1 second.
      setTimeout(function () {
        body.style.pointerEvents = "auto";
      }, 1000);
    }

    //this function plays placemet sound.
    audio("./media/place.mp3");
    //this condition checks to see if it is the computers turn.
    if (activePlayer === "O") {
      //This function disables clicking for computers turn.
      disableClick();
      //this function waits 1 second before the computer places and image and enables click.
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }
    //returning true is needed for our computersTurn() function to work.
    return true;
  }
  //This function results in a random sqaure being selected by the computer.
  function computersTurn() {
    //This boolean is needed for our while loop.
    let success = false;
    // This variable stores a random number 0-8.
    let pickAsquere;
    //This condition allows our while loop to keep trying if a square is selected already.
    while (!success) {
      //A random number between 0 and 8 is selected.
      pickAsquere = String(Math.floor(Math.random() * 9));
      //if the random number evaluated returns true, the square hasn't been selected yet.
      if (placeXorO(pickAsquere)) {
        //This line calls the Function.
        placeXorO(pickAsquere);
        //this changes our boolean and ends the loop.
        success = true;
      }
    }
  }

  //This function parses the selectedSquares array to search for win conditions.
  // drawlaine() function is called to draw a line on the screen if the condition is met.
  function checkWinConditions() {
    //X 0,1,2 condition.
    if (arrayIncludes("0X", "1X", "2X")) {
      drawWinLine(95, 100, 508, 100);
    }
    //X 3,4,5 condition.
    else if (arrayIncludes("3X", "4X", "5X")) {
      drawWinLine(95, 304, 508, 304);
    }
    //X 6,7,8 condition.
    else if (arrayIncludes("6X", "7X", "8X")) {
      drawWinLine(95, 508, 508, 508);
    }
    //X 0,3,6 condition.
    else if (arrayIncludes("0X", "3X", "6X")) {
      drawWinLine(95, 50, 100, 508);
    }
    //X 1,4,7 condition.
    else if (arrayIncludes("1X", "4X", "7X")) {
      drawWinLine(300, 50, 300, 508);
    }
    //X 2,5,8 condition.
    else if (arrayIncludes("2X", "5X", "8X")) {
      drawWinLine(503, 50, 503, 508);
    }
    //X 6,4,2 condition.
    else if (arrayIncludes("6X", "4X", "2X")) {
      drawWinLine(95, 508, 510, 90);
    }
    //X 0,4,8 condition.
    else if (arrayIncludes("0X", "4X", "8X")) {
      drawWinLine(95, 100, 508, 508);
    }

    //O 0,1,2 condition.
    if (arrayIncludes("0O", "1O", "2O")) {
      drawWinLine(95, 100, 508, 100);
    }
    //O 3,4,5 condition.
    else if (arrayIncludes("3O", "4O", "5O")) {
      drawWinLine(95, 304, 508, 304);
    }
    //O 6,7,8 condition.
    else if (arrayIncludes("6O", "7O", "8O")) {
      drawWinLine(95, 508, 508, 508);
    }
    //O 0,3,6 condition.
    else if (arrayIncludes("0O", "3O", "6O")) {
      drawWinLine(95, 50, 100, 508);
    }
    //O 1,4,7 condition.
    else if (arrayIncludes("1O", "4O", "7O")) {
      drawWinLine(300, 50, 300, 508);
    }
    //O 2,5,8 condition.
    else if (arrayIncludes("2O", "5O", "8O")) {
      drawWinLine(503, 50, 503, 508);
    }
    //O 6,4,2 condition.
    else if (arrayIncludes("6O", "4O", "2O")) {
      drawWinLine(95, 508, 510, 90);
    }
    //O 0,4,8 condition.
    else if (arrayIncludes("0O", "4O", "8O")) {
      drawWinLine(95, 100, 508, 508);
    }

    //This condition checks for a tie, if none of the above conditions are met and 9 squares are selected the code executes.
    else if (selectedSqueres.length >= 9) {
      //this function plays the tie game sound.
      audio("./media/tie.mp3");
      //this function sets a .3 second timer before the reset game is called.
      setTimeout(function () {
        resetGame();
      }, 500);
    }

    //this function checks if an array includes 3 strings. it is used to check for each win condition.

    function arrayIncludes(squareA, sqaureB, sqaureC) {
      //these 3 variables will be used to check for 3 in a row.
      const a = selectedSqueres.includes(squareA);
      const b = selectedSqueres.includes(sqaureB);
      const c = selectedSqueres.includes(sqaureC);
      //if the 3 variables we pass are all included in our array then true is returned and our else if condition executes the drawLine() function.
      if (a === true && b === true && c === true) {
        return true;
      }
    }

    //This function utilizes HTML canvas to draw win Lines.
    function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
      //this line accesses our HTML canvas element.
      /** @type {HTMLCanvasElement} */
      const canvas = document.getElementById("win-lines");
      //this line gives us access to method and properties to use on canvas.
      const c = canvas.getContext("2d");
      //this line indicates where the start of a lines axis is.
      let x1 = coordX1,
        x2 = coordX2,
        y1 = coordY1,
        y2 = coordY2;
      //this variable stores temporary data we update in animation loop.
      let x = x1,
        y = y1;

      //this function interacts with the canvas.
      function animateLineDrawing() {
        //this variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path.
        c.beginPath();
        //This method moves strating point in our line.
        c.moveTo(x1, y1);
        //this method indicates the end point in our line
        c.lineTo(x2, y2);
        //this method sets the width of our line.
        c.lineWidth = 10;
        //this method sets the color of our line .
        c.strokeStyle = "rgba(0,180,0,0.8)";
        //this method draws everything we laid out above.
        c.stroke();
        //this condition checks if we've reached the endPoints.
        if (x1 <= x2 && y1 <= y2) {
          //this condition adds 10 to the previous end x endpoint.
          if (x < x2) {
            x += 10;
          }
          //this condition adds 10 to the previous end y endpoint.
          if (y < y2) {
            y += 10;
          }
          //this condition is similar to the one above.
          //this is necessary for the 6,4,2 win conditions.
          if (x >= x2 && y >= y2) {
            cancelAnimationFrame(animationLoop);
          }
        }
        //this condition is similar to the one above.
        //this is necessary for the 6,4,2 win condition.
        if (x1 <= x2 && y2 >= y2) {
          if (x < x2) {
            x += 10;
          }
          if (y > y2) {
            y -= 10;
          }
          if (x >= x2 && y <= y2) {
            cancelAnimationFrame(animationLoop);
          }
        }
      }

      //this function clears our canvas after our win line is drawn.
      function clear() {
        //this line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop.
        cancelAnimationFrame(animationLoop);
      }

      //this function makes our body element temporarily unclickable.
      function disableClick() {
        //this makes our body unclickable.
        body.style.pointerEvents = "none";
        //This makes our body clickable again after 1 second.
        setTimeout(function () {
          body.style.pointerEvents = "auto";
        }, 1000);
      }

      //this line disallows clicking while the win sound is playing
      disableClick();
      // this line plays the win sounds.
      audio("./media/winGame.mp3");
      //this line calls our main animation loop.
      animateLineDrawing();
      //this line waits 1 second. than, clears canvas, reset game , an allows clicking again.
      setTimeout(function () {
        clear();
        resetGame();
      }, 1000);
    }
  }

  //this Function resets the game in the event of tie or win.
  function resetGame(){ 
    //This for loop iterates through each HTML Squere elements.
    for (let i = 0; i < 9; i++) {
      //This variable gets the HTML element i.
      let sqaure = document.getElementById(String(i));
      //This removes our elements backgroundImage.
      sqaure.style.backgroundImage = '';
    }
    //This resets our array so it is empty and we can start over.
    selectedSqueres = [];
  }
}