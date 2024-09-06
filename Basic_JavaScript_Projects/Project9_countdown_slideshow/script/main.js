function countdown() { 
    var seconds = document.getElementById('seconds').value;

    function tick() { 
        seconds = seconds - 1;
        document.getElementById('timer').innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) { 
            alert("Time's Up!");
            clearTimeout(time);
            document.getElementById('timer').innerHTML = "";
        }
    }
    tick();
}

let slideindex = 1;
showSlide(slideindex);

// Next previous controls
function plusSlides(n) { 
    showSlide(slideindex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlide(slideindex = n);
}
 
function showSlide(n) { 
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) { slideindex = 1 }
    if (n < 1) { slideindex = slides.length }
    for (i = 0; i < slides.length; i++) { 
       slides[i].style.display="none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideindex-1].style.display = "block";
    dots[slideindex - 1].className += " active"; 
}