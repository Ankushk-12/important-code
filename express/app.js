const express = require("express")

const mysql = require("mysql")

const app = new express();

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Ankush@2001",
    database: "sys"
})

con.connect((err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("Connected");
    }
})
app.get("/fetch",(req,res)=>{
    con.query("SELECT * FROM sys.employee;",(err,result,fields)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
            console.log(result);
        }
    })
})

app.listen(3050,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("port at 3050");
    }
})
