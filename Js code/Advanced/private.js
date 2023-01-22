class C1 {
    feel;
    constructor(name,age,role,feel){
        this.name = name;
        this.age = age;
        this.role = role;
        this.feel = feel;
    }
    #gender = "Male";  // private variable 
    #courseCount = []; // private array 
    setter(name){
        this.#courseCount.push(name);  // setter
    }
    getter(){
        return this.#courseCount;  // getter
    }
}
  
const ans = new C1("Kunal",22,"admin","good");

ans.setter("web dev");

console.log(ans.getter());

console.log(ans.courseCount);// undefine
console.log(ans.feel);// undefine