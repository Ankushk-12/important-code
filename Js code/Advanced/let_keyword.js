// if use want to see an error when something happened wrong use let keyword it set the scope of the 
// variable when it is declard 

console.log(Name);
var Name = "Ankush";
// console.log(Name2);
// it will give an error when you want to access the variable before decalring the variable

let Name2 = "Ankush";
console.log(Name2);

// here we can also access the "don" variable out of scope 
if (true) {
    var don  = "ak saab";
    // console.log(don);
}
console.log(don);// here we can also access the "don" variable out of scope 
// but while using let keyword it will thrown an error 

if (true) {
    let don2  = "ak saab";
    // console.log(don);
}
console.log(don2);//ERROR

// always use let keyboard to set the scope of an variable 
