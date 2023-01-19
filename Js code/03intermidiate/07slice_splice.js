var sum = [12,34,5,67,8,94,323,54,67,1,11,];

console.log(sum.slice(1,7));
// gives the sub array 

// Splice method
var Don = [4,5,4,67,5,74,4,6,12,5];
console.log(Don);
Don.splice(0,5,"Ankush");
// console.log(d2);
console.log(Don);

var d2 = [1,2,34,56,76,54,67,8,8];
console.log(d2.splice(0,5,"h"));


d2.slice(0,7,"h","Ankush");
console.log(d2);
