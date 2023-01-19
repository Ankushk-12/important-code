// var result = Math.max(5,7,8,9,4,6,12,8);
// console.log(result);
// var result = Math.max(5,7,8,6,12,8);
// console.log(result);
// var result = Math.max(5,7,8,9,4,6,12,8,3,45,32,5,66,8);  // in build functions which use rest operators
// console.log(result);

// const obj = {}

// Object.assign(obj,{a:7,b:8,c:4},{z:8,y:9,j:14},
// {c:5,z:1,k:8});

// console.log(obj);

function sum(a,b){
    return a+b;
}

var result = sum(15,17);
console.log(result);

arr = [15,17];

console.log(sum(arr));  // show undefined becouse of parameters are in the form of array

// use ... operator which is called spread operator 

console.log(sum(...arr));  // shows the output



function multi(a,b){
    let m = (a*b)
    return m;
}
// works only two values 
console.log(multi(12,12));

// but if we use rest operator we can pass varible arguments to an function 

function multi1(...args){
    let result = 1;
    for (const i of args) {
        result= result*i;
    }
    return result;
}

console.log(multi1(12,4,5));

function fibo(a,b,...args){
    let mul = a*b
    let sum = 0;
    for (const i of args) {
        sum+=i;
    }
    return [mul,sum]
}

console.log(fibo(3,2,7,8,5));

function fibo(num){
    let a = 0,b= 1;
    console.log(a+'\n'+b);
    let c= 1;
    for (let index = 0; index < num; index++) {
        c = a+b;
        a = b;
        b= c;
        console.log(c);
    }
}

fibo(7);
