// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

var counter = document.getElementById("counter");
var followers = document.getElementById("followers");


var count = 1;

setInterval(() => {
    if (count<1000) {
        count++;
        counter.innerText = count;
        
    }
}, 1);
setTimeout(() => {
    followers.innerText = "followers on Instagram";
}, 4290);