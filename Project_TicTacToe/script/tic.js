let activePlayer = 'x';
let selectedSqueres = [];

function placeXorO(squareNumber) { 
    if (!selectedSqueres.some(Element => Element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'x') {
            select.style.backgroundImage = "url('./images/x.png')";
        } else { 
            select.style.backgroundImage = "url('./images/o.png')";
        }

        selectedSqueres.push(squareNumber + activePlayer);
        checkWinCondition();
        if (activePlayer === 'x') {
            activePlayer = 'o';
        } else { 
            activePlayer = 'x';
        }

       // audio('./media/place.mp3');
        if (activePlayer === '0') { 
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }

    function computersTurn() { 
        let success = false;
        let pickASquare;
        while (!success) { 
            pickASquare = string(Math.floor(Math.random() * 9));
            if (placeXorO(pickASquare)) { 
                placeXorO(pickASquare);
                success = true;
            };
        }
    }
}