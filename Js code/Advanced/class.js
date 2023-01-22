class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    courseCount = [];
    courseEnroll(courseName){ 
        console.log("constructor called ");
        this.courseCount.push(courseName);
    }
    courseLish(){
        return this.courseCount;
    }
    getinfo(){
        return {name:this.name,email:this.email,courseCount:this.courseCount}
    }
    
}

module.exports  = user;