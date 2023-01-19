   var user = ["Ankush",22,"admin"]

//    Name = user[0];
//    Age = user[1];
//    role = user[2];
//    console.log(Name);
//    console.log(Age);
//    console.log(role);
//    // Another way to do so

//    var [Name,Age,role] = user;
//    // this is  called distructueing of data type

//    console.log(Name);
//    console.log(Age);
//    console.log(role);

   const info  = {
    Name: "Kunal",
    work: "intern",
    coursecount : 4,
    Gender: "Male",
    Honest: true    
}
console.log(info);

const {Name,work ,Gender,Honest} = info;
// const {Name,work ,gender,Honest} = info;
// it will show an error becouse name must be same of the
// objects

console.log(Name);
console.log(work);
console.log(Gender);
console.log(Honest);

