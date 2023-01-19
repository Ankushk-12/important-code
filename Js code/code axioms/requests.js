
// let p= fetch("https://jsonplaceholder.typicode.com/posts");
// p.then( value1 => value1.json()).then((value2)=>console.log(value2)).catch(err => console.log(err));


// const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
// const body = await response.text();

// console.log(body);

// import axios from 'axios';
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {

    console.log(error.response.status);
  })

  console.log("kiran");
  console.log("Ankush");