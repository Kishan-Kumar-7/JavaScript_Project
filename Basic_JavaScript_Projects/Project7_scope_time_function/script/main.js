var counter = 0;
function gCount() { 
    counter++;
    document.getElementById('glcount').innerHTML = counter;
    console.log(lcount); // This is local variable from another function which is not accesible from here.
}

function lCount() { 
    var lcount = 0;
    lcount += counter;
    document.getElementById('locount').innerHTML = lcount;
    console.log(counter); // this is global variable so you can use it inside and outside of this function also.
}

function timeGreet() { 
    var time = new Date().getHours();
    if (time < 12) { 
        document.getElementById('greet').innerHTML = "Good Morning!!!!";
    }
    else if(time == 12 || time < 16){ 
        document.getElementById('greet').innerHTML = "Good Afternoon!!!!";
    }
    else{ 
        document.getElementById('greet').innerHTML = "Good Evening!!!!";
    }
}

function voteage() { 
    var checkage = document.getElementById('valiage').value;
    if (checkage > 18) {
        document.getElementById('ageres').innerHTML = "Congratulations! You Are Allowed To Vote..";
    }
    else { 
        document.getElementById('ageres').innerHTML = "Sorry!! Please Try Next Year...";
    }
}