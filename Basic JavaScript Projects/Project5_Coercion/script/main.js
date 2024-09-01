function Coercion() { 
    var val1 = "10";
    var val2 = 6;
    document.getElementById('coer').innerHTML = "Here We Have Two Values, Type of Value 1 is \"10\" " + typeof (val1) + " and Type of Value 2 is 6 " + typeof (val2) + " But When we Do Addition of two type we get : " + val1 + val2;
}

function nan_func() { 
    var x = 0;
    document.getElementById('nan').innerHTML = x / x;
}

function nan_true() { 
    document.getElementById('nant').innerHTML = "There is two variables, first has value 'Hello' is NaN " + isNaN("Hellow") + " and second value is '25' is NaN " + isNaN("25");
}

function infinite() { 
    document.getElementById('infy').innerHTML = 2E310;
    document.getElementById('infy1').innerHTML = -3E310;
}

function boolean() { 
    var x = 10, y = 5, z = 15;
    document.getElementById('bool1').innerHTML = x > y;
    document.getElementById('bool2').innerHTML = z < x;
    console.log(x + y + z);
    console.log(x > z);
}

function compare() { 
    var x = 10, y = 5, z = 10;
    document.getElementById('com1').innerHTML = x == y;
    document.getElementById('com2').innerHTML = x == z;
}

function tcomp() { 
    var w = 10, x = 10, y = "15", z = 15;
    document.getElementById('comp1').innerHTML = x === w;
    document.getElementById('comp2').innerHTML = x === y;
    document.getElementById('comp3').innerHTML = y === z;
    document.getElementById('comp4').innerHTML = x === z;
}

function andOprator() { 
    var x = 5, y = 3, z = 7;
    document.getElementById('and1').innerHTML = (x > y && x < z);
    document.getElementById('and2').innerHTML = (y < x && z < x);
}

function orOprator() { 
    var x = 5, y = 3, z = 7;
    document.getElementById('or1').innerHTML = (x < y || x > z);
    document.getElementById('or2').innerHTML = (y < x || z < x);
}

function notOprator() { 
    var x = 5, y = 10;
    document.getElementById('not1').innerHTML = !(x > y);
    document.getElementById('not2').innerHTML = !(x < y);
}

