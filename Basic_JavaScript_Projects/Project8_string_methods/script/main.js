function myConca() { 
    var p1 = document.getElementById('Part01').value;
    var p2 = document.getElementById('Part02').value;
    var p3 = document.getElementById('Part03').value;
    var p4 = document.getElementById('Part04').value;
    document.getElementById('sentance').innerHTML = p1.concat(p2, p3, p4);
}

function mySlice() {
    var sentance = document.getElementById('texxt').value;
    document.getElementById('textres').innerHTML = sentance.slice(10, 20);
}
 
function UpperCase() { 
    var word = document.getElementById('upperCase').value;
    document.getElementById('capres').innerHTML = word.toUpperCase();
}

function mySearch() { 
    var text ="Please type any word from this sentance to know its position.";
    var sear = document.getElementById('findt').value;
    document.getElementById('posi').innerHTML = text.search(sear);
}

function num2str() { 
    var text = document.getElementById('numb').value;
    document.getElementById('numb2str').innerHTML = 10 + text.toString();
}

function myPreci() { 
    var X = document.getElementById('prenum').value;
    var pre = parseInt(X);
    document.getElementById('preres').innerHTML = pre.toPrecision(10);
}

function myFix() { 
    var X = document.getElementById('fixi').value;
    var fix = parseInt(X);
    document.getElementById('fixres').innerHTML = fix.toFixed(3);
}

function myValu() { 
    var text = document.getElementById('val').value;
    var result = text.valueOf();
    document.getElementById('valres').innerHTML = result;
}