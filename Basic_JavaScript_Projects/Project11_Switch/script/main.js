function cFunc() {
    var cOutput;
    var fruits = document.getElementById('cInput').value;
    var cString = " is a tasty fruit!";
    switch (fruits) {
        case "Grapes":
            cOutput = "Grapes" + cString;
            break;
        case "Melon":
            cOutput = "Melon" + cString;
            break;
        case "Apple":
            cOutput = "Apple" + cString;
            break;
        case "Grapefruit":
            cOutput = "Grapefruit" + cString;
            break;
        case "Banana":
            cOutput = "Banana" + cString;
            break;
        case "Mango":
            cOutput = "Mango" + cString;
            break;
        case "Orenge":
            cOutput = "Orenge" + cString;
            break;
        default:
            cOutput = fruits + " is Not my Favorite.";
            break;
    }
    document.getElementById('output').innerHTML = cOutput
 }