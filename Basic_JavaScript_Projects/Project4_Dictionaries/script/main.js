function myDict(){ 
    var Animal = {
        Type: "Dog",
        Breed: "Pitbull",
        Color: "Chocolate",
        Age: 3,
        Sound: "Bark, Growl"
    };
    delete Animal.Sound;
    document.getElementById('dict').innerHTML ="The Sound of Dog Pitbull is "+ Animal.Sound;
}