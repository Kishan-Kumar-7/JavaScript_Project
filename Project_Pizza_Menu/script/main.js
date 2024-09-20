function getReceipt() {
  //this initializes our string so it can get passed from function to function growing line by line into full recipt
  var text1 = "<h3>Your Order is :</h3>";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  for (let i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1 + selectedSize + " ";
    }
  }
  if (selectedSize == "Personal") {
    sizeTotal = 6;
  } else if (selectedSize == "Small") {
    sizeTotal = 8;
  } else if (selectedSize == "Medium") {
    sizeTotal = 10;
  } else if (selectedSize == "Large") {
    sizeTotal = 14;
  } else if (selectedSize == "Extra-Large") {
    sizeTotal = 18;
  }
  runningTotal = sizeTotal;
  getCrust(runningTotal, text1);
}

function getCrust(runningTotal, text1) {
  var crustTotal = 0;
  var selectedCrust = [];
  var crustArray = document.getElementsByClassName("crust");
  for (let j = 0; j < crustArray.length; j++) {
    if (crustArray[j].checked) {
      var selectedCrust = crustArray[j].value;
      text1 = text1 + selectedCrust + " ";
    }
  }
  if (selectedCrust == "Regular") {
    crustTotal = 0;
  } else if (selectedCrust == "Garlic-Butter") {
    crustTotal = 2.75;
  } else if (selectedCrust == "Spicy") {
    crustTotal = 2.75;
  } else if (selectedCrust == "House-Special") {
    crustTotal = 4;
  } else if (selectedCrust == "Cheese-Stuffed") {
    crustTotal = 4.75;
  }
  runningTotal += crustTotal;
  getSauce(runningTotal, text1);
}

function getSauce(runningTotal, text1) {
  var selectedSauce = [];
  var sauceArray = document.getElementsByClassName("sauce");
  for (let j = 0; j < sauceArray.length; j++) {
    if (sauceArray[j].checked) {
      var selectedSauce = sauceArray[j].value;
      text1 = text1 + selectedSauce + " ";
    }
  }
  getCheese(runningTotal, text1);
}

function getCheese(runningTotal, text1) {
  var cheeseTotal = 0;
  var selectedCheese = [];
  var cheeseArray = document.getElementsByClassName("cheese");
  for (let j = 0; j < cheeseArray.length; j++) {
    if (cheeseArray[j].checked) {
      var selectedCheese = cheeseArray[j].value;
      text1 = text1 + selectedCheese + " ";
    }
  }

  if (selectedCheese == "Parmesan") {
    cheeseTotal = 2.75;
  } else if (selectedCheese == "Mozzarella") {
    cheeseTotal = 3;
  } else if (selectedCheese == "Goat-Cottege") {
    cheeseTotal = 4.75;
  } else if (selectedCheese == "Cheddar") {
    cheeseTotal = 2;
  } else if (selectedCheese == "Extra-Cheese") {
    cheeseTotal = 3.5;
  }
  runningTotal += cheeseTotal;
  getVeggie(runningTotal, text1);
}

function getVeggie(runningTotal, text1) {
  var vegTotal = 0;
  var selectedVeg = [];
  var vegArray = document.getElementsByClassName("veggie");
  for (let j = 0; j < vegArray.length; j++) {
    if (vegArray[j].checked) {
      selectedVeg.push(vegArray[j].value);
      text1 = text1 + vegArray[j].value + " ";
    }
  }
  var vegCount = selectedVeg.length;
  if (vegCount > 1) {
    vegTotal = vegTotal - 1;
  } else {
    vegTotal = 0;
  }
  runningTotal = runningTotal + vegTotal;
  getMeats(runningTotal, text1);
}

function getMeats(runningTotal, text1) {
  var meatTotal = 0;
  var selectedmeat = [];
  var meatArray = document.getElementsByClassName("meats");
  for (let j = 0; j < meatArray.length; j++) {
    if (meatArray[j].checked) {
      selectedmeat.push(meatArray[j].value);
      text1 = text1 + meatArray[j].value + " ";
    }
  }
  var meatCount = selectedmeat.length;
  if (meatCount > 1) {
    meatTotal = meatCount - 1;
  } else {
    meatTotal = 0;
  }
  runningTotal = runningTotal + meatTotal;
  let total = parseFloat(runningTotal).toFixed(2);
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML =
    "<h3>Total: <strong>&euro;" + total + "</strong></h3>";
}
