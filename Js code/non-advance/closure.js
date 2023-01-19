// var sum1 = setTimeout(()=>{
//     console.log("Hello Ankush");
// },5000);
// var sum2 = setInterval(()=>{
//     console.log("Zversal ");
// },2000);
// sum1;
// sum2;

// console.log("start");
// console.log("end");

var sum1 = function(x){
    return function sum2(y) {
        // return "Sum of two numbers are : "+ x+y;
         console.log("Sum of two numbers are : "+ (x+y));
    }
}

var num = sum1(6)(12);
// num(12);
// console.log(num(12));

