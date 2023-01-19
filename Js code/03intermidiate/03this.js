
var num = 24;
console.log(this);
// the output will different when we run this into the browser because global context is different in both cases
// try it by yuerself

function nu(){
    var n = 34;
    console.log(this);
    // this will show an error
}
nu();