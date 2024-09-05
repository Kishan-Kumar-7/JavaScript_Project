function mySum() {
    let string1 = "Here is Total of 10 and 25. "
     string1 += "Your Result is :";
    let value1 = 10;
    let value2 = 25;
    let res1 = value1 + value2;
    document.getElementById("result").innerHTML = string1+" "+res1;
}