 const user = require("./class");

 let Ankush = new user("Ankush","Ankush@gmail.com");

 console.log(Ankush.getinfo());
 Ankush.courseEnroll(" core java")
 Ankush.courseEnroll(" Web dev")
 Ankush.courseEnroll(" Machine Learning")

 console.log(Ankush.getinfo());

console.log(Ankush.courseLish());

let course = Ankush.courseLish();
console.log(`the total Enrolled course are ${course.length} and the list of the courses are :`); 
    console.log(course.forEach((e) => {
        console.log(e);
    }));
