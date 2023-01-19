var Num = ["Ankush","domo","kumal"];

console.log(Num);
Num.fill("Don");
console.log(Num);

var result = [1,22,34,56,78,9,66,54,1].fill(202,2,7);


console.log(result);

var doo = [23,56,78,9,1,23,4,56,67].filter((e)=>{
    return e<56;
})
console.log(doo);

var d = [1,32,45,6,78,9,55].filter((e)=>{
    return e%2===0;
})
console.log(d);