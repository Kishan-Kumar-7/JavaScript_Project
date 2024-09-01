function addition_function() { 
    var addition = 2;
    addition += 2;
    document.getElementById('addi').innerHTML = " 2 + 2 = " + addition;
}

function substraction_function() { 
    var sub = 5;
    sub -= 2;
    document.getElementById('sub').innerHTML = " 5 - 2 = " + sub;
}

function multiplication_function() { 
    var mul = 6;
    mul *= 8;
    document.getElementById('mul').innerHTML = " 6 * 8 = " + mul;
}

function division_function() { 
    var divi = 48;
    divi /= 6;
    document.getElementById('divi').innerHTML = " 48 / 6 = " + divi;
}

function modulus_function() {
    var modu = 25 % 6;
    document.getElementById('modu').innerHTML = " 25 / 6 remeinder is " + modu;
 }

function multi_math() { 
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById('multi').innerHTML = "(1 + 2) * 10 / 2 - 5 = " + simple_math;
}

function negation_function() {
    var x = 10;
    document.getElementById('nega').innerHTML = -x;
}
 
function incriment() { 
    var x = 5;
    x++;
    document.getElementById('incr').innerHTML = "Value of x was 5 before incriment : " + x;
}

function Decriment() { 
    var x = 5.25;
    x--;
    document.getElementById('decr').innerHTML = "Value of x was 5.25 before Decriment : " + x;
}

function random() { 
    var x = Math.floor(Math.random() * 10);
    document.getElementById('rand').innerHTML = "Randomly Generated Number : " + x;
}