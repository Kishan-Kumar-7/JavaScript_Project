// Open Modal

function openModal() { 
    document.getElementById('myModal').style.display = "Block";
}

//Close Modal
function closeModal() { 
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlide(slideIndex);

//Next/Prev cantrols
function plusSlides(n) { 
    showSlide(slideIndex += n)
}

//Thumbnail image controls
function currentSlide(n) { 
    showSlide(slideIndex = n);
}

function showSlide(n) { 
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('demo');
    var captionText = document.getElementById('caption');
    if (n > slides.length) { slideIndex = 1}
    if (n < 1) { slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}