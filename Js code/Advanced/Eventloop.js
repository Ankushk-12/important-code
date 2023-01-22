const fun1 = ()=>{
    console.log("function 1 called");
}
const fun2 = ()=>{
    setTimeout(()=>{
        let index = 10;
        while (index<20) {
            console.log(index);
            index++;
        }
        // console.log(index);
        console.log("print after time out");
    },2000)
    console.log("function 2 called");
}
const fun3 = ()=>{
    setTimeout(()=>{console.log("function 3 set timeout method ");},3000);
    console.log("function 3 called");
}

fun1();
fun3();
fun2();
// fun3();