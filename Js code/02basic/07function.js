function sum(num1,num2){
    console.log("Hello World ");
    console.log("sum of two values are : ",num1+num2);
}
sum(4,7);
 
function namastey(){
    return "Greeting in india";
}

namastey();
// nothing happen because it return value
// which is not stored anywhere

var greet = namastey();
console.log(greet); // or 
console.log(namastey());
