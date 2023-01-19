//undefined
// null
// NaN
// var num = "2";
var num = 2;
 
if("2"==num){
    console.log("same value but different type ");
    console.log("number is true");
}
// if(2==num){
//     console.log("number is true");
// }
// in both cases the output is true because it is a loosly bound 

if(2===num){
    console.log("same value and same type ");
    console.log("number is true");
}
// it will print nothing

var nu = "A";

if(nu){
    console.log("kuj bhi bolo ");
}
var nu = "";
if(nu){
    console.log("kuj bhi 2");  // it will not give output if nu have "" value 
    // it means it is empty and it is consider as false value 
}