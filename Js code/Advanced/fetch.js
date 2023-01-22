

fetch('https://api.chucknorris.io/jokes/random')
.then(((Res)=>{
    return Res.json();
}))   
.then((data)=>{console.log("Data: ",data.value);
})    
.catch(console.error())
