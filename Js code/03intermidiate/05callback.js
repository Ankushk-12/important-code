var num = "Ankush";
console.log(num);
// different ways to create or declare a function 

// function isEven(element) {
//     if (element%2===0) {
//         return true;
//     }
//     return false;
// }
// function isEven(element) {
//     // if (element%2===0) {
//     //     return true;
//     // }
//     return element%2===0;
// }

// var isEven = function (element) {
//     return element%2===0;
// }
var isEven =  (element)=> {
    return element%2===0;
}


console.log(isEven(5));

// var result =  [1,32,45,6].every(isEven);
// console.log(result);
// var result =  [1,32,45,6].every((e)=>{
//     return e%2===0;
// });
var result =  [1,32,45,6].every((e)=>( e%2===0)  // every is a callback function 
);
console.log(result);




