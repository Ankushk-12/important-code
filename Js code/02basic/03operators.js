var num1 = 799;
var num2 = 199;
var num3 = num1 > num2;
var num4 = num1 < num2;
console.log(num1+num2);
console.log((num1/num2));
console.log((num1*num2));
console.log((num3));
console.log((num4));

var price = 799;
var sellingPrice = 199;
discountOfCourse = ((price-sellingPrice)/sellingPrice)*100;

console.log("Discount : "+discountOfCourse);
discountOfCourse = Math.round(((price-sellingPrice)/sellingPrice)*100);
console.log(discountOfCourse+"% off");


