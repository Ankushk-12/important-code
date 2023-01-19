var User = function(Name,age ,gender){
    this.Name = Name;
    this.age = age;
    this.gender = gender;
    this.getInfo = function(){
        console.log(`the name of the user is ${this.Name} ,
        the age of the user is ${this.age} ,
        the gender of the user is ${this.gender}`); 
    };

};
User.prototype.setter = (Name,age,gender)=>{
    this.Name = Name;
    this.gender = gender;
    this.age = age;
}
var ankush = new User("Ankush",22,"male");
console.log(ankush);
ankush.getInfo();
ankush.setter("Komal",21,"Female");
ankush.getInfo();


if(ankush.hasOwnProperty("age")){
    console.log(ankush.age);
}


var rishabh = new User("Rishabh",21,"Male");
rishabh.getInfo();
// user.prototype.getAge = function(){
//      return`age of the ${Name} is ${this.age}`;
// }

// var ankush = new User("Ankush",22,"male");

// ankush.getAge();
// ankush.getInfo();


