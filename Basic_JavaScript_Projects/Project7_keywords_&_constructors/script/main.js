function Vehical(make, model, color, year) {
    this.Make = make;
    this.Model = model;
    this.Color = color;
    this.Year = year;
}
 
var Jack = new Vehical("Dodge", "Viper", "Black", 2020);
var Emily = new Vehical("Jeep", "Trail Hawk", "Red and White", 2019);
var Erik = new Vehical("Ford", "Pinto", "Musterd", 1971);

function myCons(Name) { 
    document.getElementById('vehi').innerHTML = Name+" Drives a " + Name.Make +" "+ Name.Model + " Coloured " + Name.Color + " Manufactured in Year " + Name.Year + ".";
}

console.log(Emily);
console.log(Erik);

function count() { 
    document.getElementById('counting').innerHTML = countF();
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
    document.getElementById('result').innerHTML = i
 }