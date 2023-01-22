async function weather(){ 
    let delhiWeather = new Promise((Resolve,reject)=>{
        setTimeout(()=>{
            Resolve("27 degree")
        },1000)
})
    let BangloreWeather = new Promise((Resolve,reject)=>{
        setTimeout(()=>{
            Resolve("21 degree")
        },2000)
})
console.log("before fetching delhi weather info");
let delhi = await delhiWeather
console.log(" fetching delhi weather info"+delhi);
console.log("before fetching banglore weather info");
let banglore = await BangloreWeather
console.log(" fetching banglore weather info"+banglore);
return "Function finished"
}
console.log("outside the function");
// let [var1,var2]  = weather();
let var11 = weather();
var11.then((value)=>{
    console.log(value);
})
// console.log(var1);
// console.log(var2);