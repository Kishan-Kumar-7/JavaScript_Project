function myfunc() {
    alert("This Alert Fuction is made Without using Arrow function.");
}
 
var myArrowfunc = () => alert("THIS Alert Function is made with using Arrow Function.");
var age = [2, 10, 18, 20, 13, 15, 30];

var checkAge = (age) => age >= 18;

function myFunction() { 
    document.getElementById('displayAge').innerHTML = age.some(checkAge);
}