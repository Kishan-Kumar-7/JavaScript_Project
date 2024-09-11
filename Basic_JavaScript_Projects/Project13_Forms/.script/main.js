function myForm() { 

}

function Validate() { 
    let firstn = document.forms["myForms"]["fname"].value;
    if (firstn == "") { alert("Please Enter First Name") };
    let lastn = document.forms["myForms"]["lname"].value;
    if (lastn == "") { alert("Please Enter Last Name") };
    let Email = document.forms["myForms"]["email"].value;
    if (Email == "") { alert("Please Enter Email Address") };
    let Mobile = document.forms["myForms"]["tele"].value;
    if (Mobile == "") { alert("Please Enter Mobile Number") };
    let Passw = document.forms["myForms"]["pass"].value;
    if (Passw == "") { alert("Please Enter Password!") };
}