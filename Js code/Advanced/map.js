var myMap = new Map();

myMap.set(1,"ankush");
myMap.set(2,"Chandan");
myMap.set(3,"rishabh");
myMap.set(4,"keshav");

console.log(myMap);

console.log(myMap.get(2));

for(let key of myMap.keys()){
    console.log(`Keys are ${key}`);
}
for(let key of myMap.values()){
    console.log(`values are ${key}`);
}
for(let [key,value] of myMap){
    console.log(`keys are ${key} values are ${value}`);
}

myMap.forEach((keys)=>{
    console.log(keys);
})
myMap.forEach((keys,values)=>{
    console.log(keys);
    console.log(values);
})
console.log("fjfoijv");
myMap.forEach((value)=>{
    console.log(value);
})// both print the same thing