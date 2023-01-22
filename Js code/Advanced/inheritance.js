class Car {
    constructor(name,carName,model){
        this.name = name;
        this.carName = carName;
        this.model = model;
    }
    #modelNumber;
    setter(number){
        this.#modelNumber = number;
    }
   getter(){
    return this.#modelNumber;
   }
   info(){
    console.log("Car class method ");
    return {name:this.name,car_name:this.carName,model:this.model};
    
   }
   info(buyYear){
    // info();
    this.buyYear = buyYear;
    return {name:this.name,car_name:this.carName,model:this.model
    , buyYear:this.buyYear};
   }
   static class_function(){
    console.log("not accessed by the sub_classes use static keyword");
   }
}

class audi extends Car{
    constructor(name,carName,model){
        super(name,carName,model);
        console.log("Audi is a best car");
    }
    info(){
        // method override 
        console.log("Audi class method ");
        return {name:this.name,car_name:this.carName,model:this.model};
    }

}
const maruti = new Car("keshav","Maruti","Zen");
console.log(typeof maruti);
console.log(maruti.info());

const audi_A4 = new audi("Ankush","Audi","A4");
console.log(typeof audi_A4);
console.log(audi_A4.info());
console.log(typeof audi);

console.log(audi_A4.info());

console.log(maruti.info());
console.log(maruti.info(2014));