function myLoop() {
    x = 1;
    while (x < 11) {
        document.write("<br>"+x)
       // document.getElementById('loop').innerHTML = x;
        x++;
    }
}

function stLength() { 
    var word = document.getElementById('text').value;
    var count = word.length;
    document.getElementById('lenres').innerHTML = count;
}

var instru = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_Loop() { 
    for (y = 0; y < instru.length; y++) {
        content += instru[y]+"<br>";
    }
    document.getElementById("list").innerHTML = content;
}

function myConst() {
    const Musical_instrument = { type: "Guitar", brand: "Fender", color: "Black" };
    Musical_instrument.color = "Red";
    Musical_instrument.Price = "$900";
    document.getElementById('const').innerHTML = "The Cost of the " + Musical_instrument.type + " was " + Musical_instrument.Price + " and the color we have is " + Musical_instrument.color + "Check console log for Error msg.";
    const x = 25;
    x = 10;
    console.log(x);
}
 
function scopeVar() { 
    var valu = "Hello";
    function scopelet() { 
        let letv = " World!";
        let val = valu + letv;
        document.getElementById('letres').innerHTML = val;
    }
    scopelet();
    document.getElementById('varres').innerHTML = valu;
}

function myretu() {
    return document.getElementById('return').innerHTML = "Return Value!"
}
 
function myObj() { 
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: 2020,
        color: "Red ",
        description: function() {
            return "This Car is " + this.make + "Model " + this.model + "Coloured " + this.color + "Manufactured in " + this.year + ".";
        }
    };
    document.getElementById('myobjct').innerHTML = car.description();
}

function myBreak(){ 
    let text = "";
    for (let i = 1; i < 11; i++) {
        if (i === 5) { break; }
        text += "The Number is " + i + "<br>";
    }
    document.getElementById('break').innerHTML = text;
}

function conti(){ 
    let text = "";
    for (let i = 1; i < 11; i++) {
        if (i === 5) { continue; }
        text += "The Number is " + i + "<br>";
    }
    document.getElementById('conti').innerHTML = text;
}
