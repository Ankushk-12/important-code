// function getUserRole(name , role){
//     switch (role) {
//         case "admin":
//             return `${name} is a admin and have all the acess of web-site`;
//             break;
    
//         case "Sub-admin":
//             return `${name} is a sub-admin and can delete and create any course `;
//             break;
    
//         case "testprep":
//             return `${name} is a testprep and can create and delete the test`;
//             break;
//         case "user":
//             return `${name} is a user that can acess the the content `;
//             break;
    
//         default:
//             return `${name} is a Trail user and can see the content but can't acess it.`;
//             break;
//     }
// }

// console.log(getUserRole("Ankush ","user"));
// console.log(getUserRole("Ankush ","admin"));
// console.log(getUserRole("Ankush ","Sub-admin"));
// console.log(getUserRole("Ankush ","testprep"));
// console.log(getUserRole("Ankush ","abc"));

// we can declare a function in a variable 

var getRole = function (name , role){
    switch (role) {
        case "admin":
            return `${name} is a admin and have all the acess of web-site`;
            break;
    
        case "Sub-admin":
            return `${name} is a sub-admin and can delete and create any course `;
            break;
    
        case "testprep":
            return `${name} is a testprep and can create and delete the test`;
            break;
        case "user":
            return `${name} is a user that can acess the the content `;
            break;
    
        default:
            return `${name} is a Trail user and can see the content but can't acess it.`;
            break;
    }
}
var getUserRole = getRole("chandan","admin")
console.log(getUserRole);
console.log(getRole("Ankush","user"));
console.log(getRole("Kunal","user"));

//arrow function : no need to write function keyword

var tellName = (Name)=>{
    console.log(`Your Name is ${Name}`);
}