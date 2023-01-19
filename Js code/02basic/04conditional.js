var isLogged = true;
var email = true;
var cardInfo = false;
var purchase = false;
var free = true;
 
if (isLogged&&email&&purchase) {
    console.log("you can Purchase the course");
}
else{
    console.log("You can't Purchase the Course");
}
if(isLogged&&email&&free||purchase){
    console.log("you can Purchase the course");
}

// 2nd Exersice 


var email = false;
var google = true;
var facebook = false;

if(email){
    console.log("you  logIn from emailId ");
}else{
    if (google) {
        console.log("you logIn from Google ");
    }if (facebook) {
        console.log("you logIn facebook");
    }
}


if (email || google || facebook ) {
    console.log("You are loggedIn");
}
else{
    console.log("You are can't logIn ");
}


// Ternory Opetators

var  authanticaled = true;
if(authanticaled){

    console.log("LogIn");
}
else{
    console.log("can't LogIn");
}

authanticaled ? console.log("LogIn") : console.log("can't LogIn"); // Ternary Operator