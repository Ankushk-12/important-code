const fun1 = ()=>{
    return "function 1"
}
const fun2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hello after 2 secounds");
        },2000)
        
    })
}
// const fun2 = ()=>{
//     setTimeout(()=>{
//         return("after 2 secounds");
//     },2000)
// }
const fun3 = ()=>{
    return "function 3"
}

const call =  async function(){
    let c1 = fun1();
    console.log(c1);
    let c2 = await fun2();
    console.log(c2);
    let c3 = fun3();
    console.log(c3);
}

call();