var ankush = {
    firstName: "Ankush",
    lastName : "kumar",
    age : 22,
    role : "admin",

     getInfo :  function () {
        console.log(`the First Name of the user is ${this.firstName}
         the Last Name of the user is ${this.lastName}
         the age of the user is ${this.age}
         the role of the user is ${this.role}`);
        
        
    }
}
console.log("1nd User");

ankush.getInfo();

console.log("2nd User");

var rishabh = {
    firstName: "Rishabh",
    lastName : "Arey",
    age : 22,
    role : "sub-admin",
}

// ankush.getInfo.bind(rishabh)();

var info = ankush.getInfo.bind(rishabh);
info();

// ankush.getInfo.call(rishabh);