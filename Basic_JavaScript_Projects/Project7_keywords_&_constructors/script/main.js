function vehical(make, model, color, year) { 
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
}

var Jack = new vehical("Dodge", "Viper", "Black",2020);
var Emily = new vehical("Jeep", "Trail Hawk", "White and Red",2019);
var Erik = new vehical("Ford", "Pinto", "Mustard", 1971);

function myCons(name) { 
    document.getElementById('vehi').innerHTML = name + " Drives a " + name.vehical.make + " Model " + name.vehical.model + " Colored " + name.vehical.color + " Manufactured in Year " + name.v.year + ".";
}