function turnery() {
  var age, can_vote;
  age = document.getElementById("age").value;
  can_vote = age > 18 ? "You are Eligible" : "You are not Eligible";
  document.getElementById("vote").innerHTML = can_vote + " to Vote.";
}

// function Vehical(name, make, model, color, year) {
//     this.Name = name;
//     this.Make = make;
//     this.Model = model;
//     this.Color = color;
//     this.Year = year;
// }

// var Jack = new Vehical("Jack","Dodge", "Viper", "Black", 2020);
// var Emily = new Vehical("Emily","Jeep", "Trail Hawk", "Red and White", 2019);
// var Erik = new Vehical("Erik","Ford", "Pinto", "Musterd", 1971);

// function myCons(Name) {
//     //let Name = document.getElementById('conname').value;
//     document.getElementById('vehi').innerHTML = Name.Name+" Drives a " + Name.Make +" "+ Name.Model + " Coloured " + Name.Color + " Manufactured in Year " + Name.Year + ".";
// }

function count() {
  document.getElementById("counting").innerHTML = countF();
  function countF() {
    var starting = 9;
    function plus_one() {
      starting += 1;
    }
    plus_one();
    return starting;
  }
}

function Count() {
  var i = 0;
  i++;
  document.getElementById("result").innerHTML = i;
}
//create object class name Vehicle
function Vehicle(name, make, model, color, year) {
  this.Name = name;
  this.Make = make;
  this.Model = model;
  this.Color = color;
  this.Year = year;
}

// Create objects
var Jack = new Vehicle("Jack", "Dodge", "Viper", "Black", 2020);
var Emily = new Vehicle("Emily", "Jeep", "Trail Hawk", "Red and White", 2019);
var Erik = new Vehicle("Erik", "Ford", "Pinto", "Mustard", 1971);

// Create a mapping from names to objects
var vehicleMap = {
  Jack: Jack,
  Emily: Emily,
  Erik: Erik,
};

function myCons() {
  // Get the user input
  let nameInput = document.getElementById("conname").value;

  // Find the vehicle object using the mapping
  let vehicle = vehicleMap[nameInput];

  // Check if vehicle exists
  if (vehicle) {
    // Display the vehicle details
    document.getElementById("vehi").innerHTML =
      nameInput +
      " drives a " +
      vehicle.Make +
      " " +
      vehicle.Model +
      " colored " +
      vehicle.Color +
      " manufactured in " +
      vehicle.Year +
      ".";
  } else {
    // Handle the case where the name is not found
    document.getElementById("vehi").innerHTML =
      "Vehicle not found. Please enter one of these names: Jack, Emily, Erik.";
  }
}
