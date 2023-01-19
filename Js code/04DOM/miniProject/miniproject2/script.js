const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const voilet = document.querySelector(".voilet");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");

const center = document.querySelector(".center");
console.log("color is:"+voilet);

var getGRBColor = function (elementSelect){
    return window.getComputedStyle(elementSelect).backgroundColor;
};

// getGRBColor(pink);

// var orangeElementColor = getGRBColor(orange);
// orange.addEventListener('mouseenter',()=>{
//      center.style.background = orangeElementColor;
// })
function color(Color,element){
    console.log(Color);
    Color.addEventListener('mouseenter',()=>{
         element.style.background = getGRBColor(Color);
    })
}
color(cyan,center);
color(orange,center);
color(pink,center);
color(voilet,center);
color(red,center);


// color(orange,center);
// color(voilet,center);
// color(pink,center);


