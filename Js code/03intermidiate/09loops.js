var sum = ["Ankush","Kumar","jalandhar"];
for (let index = 0; index < sum.length; index++) {
    if (typeof sum[index]=="Kumar"){continue;}
    else{
    console.log(sum[index]);
    }
}  

var num1 = [1,23,45,65,76,67,89,90,87,65,12,5];

// for (let index = 0; index < num1.length; index++) {
//     const element = num1[index];
//     // console.log(element);
//     if (element==89) {
//         continue;
//     }        else{
//         console.log(element);
//         if (element==90) {
//             break;
//         }
//     }
    
// }
var index = 0;
// do{
//     console.log(index);
//     index++;

// }while(index<10);

// while(index<num1.length){
//     console.log(num1[index]);
//     index++;
// }

num1.forEach(element => {
    if (element%2===0) {
        console.log(element);
    }
});

var states = ["Punjab","Mumbai","Goa","kerala","uttar perdesh"];
states.forEach((e)=>{console.log(e);}); 

var initial = ["A","b","c","d","e"]
for(const e of initial){
    console.log(e);
}