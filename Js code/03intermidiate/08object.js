// var details = {
//     firstName : "Ankush",
//     lastName : "Kumar",
//     age : 22,
//     role : "intern",
//     intersted : true,
//     experience : "None",
//     course : "CSE"
// };
var details = {
    firstName : "Ankush",
    lastName : "Kumar",
    age : 22,
    role : "intern",
    intersted : true,
    experience : "None",
    course : "CSE",
    list: [],
    setCourse: function(coursName){
        this.list.push(coursName);
        console.log(`You are choose the ${coursName} course.`);
    },
    getCourse: function(){
        return `you are enroll in ${this.list.length} courses`;
    }
};

// console.log(details);
// console.log(details.firstName);
// console.log(details.lastName);
// console.log(details.intersted);

// console.table(details);
details.course = "computer Science";
console.table(details);
console.table(details.setCourse("java"));
// setCourse("java");
console.table(details.getCourse());
