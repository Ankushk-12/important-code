

var states = ["india","pakistan","japan","usa"];
console.log(states);

// in JS array can have multiple data types like: int, boolean, string etc

var you = ["Ankush ","ankush@gmail.com",22,"male",true];
// another way to declare an array 
var some = new Array(1,23,45,67,87);
console.log(some);

console.log(you);

// famous build in function 

console.log(you[0],you[1],you[4]);

you.push("love");
console.log(you);
you.pop();
console.log(you);
you.unshift(46);

console.log(you);
you.shift();
console.log(you);
console.log(you.length);
console.log(Array.from("ANKUSH"));

console.log(you.indexOf("Ankush "));
console.log(states.indexOf("india"));
