function turnery() { 
    var age, can_vote;
    age = document.getElementById('age').value;
    can_vote = (age > 18) ? "You are Eligible" : "You are not Eligible";
    document.getElementById('vote').innerHTML = can_vote + " to Vote.";
}