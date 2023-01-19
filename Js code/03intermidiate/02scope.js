var Name = "Ankush";
console.log(Name);
say();
function say(){
    //var Name = " kunal";
    console.log("Line number 6 : ",Name);
    // it will take the value of name from above 
    // function have smaller scope than vriables
sayto();

    function sayto() {
        // var Name = " koyal";
        console.log("Line number 12 : ",Name);
    }
}

say();