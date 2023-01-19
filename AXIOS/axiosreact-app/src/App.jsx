import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from "axios";

function App() {
  const [myData, setmyData] = useState([]);
  const [isError, setIsError] = useState("");

  // NOTE: using Promises
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>setmyData(res.data))
    .catch( (error)=> setIsError(error.message))
  },[]);
  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError!==""&& <h2>{isError}</h2>}
      <div className="grid">
      {
        myData.map((post)=>{
          const {id,title,body } = post; 
          return <div className="card" key = {id}>
            <h2>{title.slice(0, 15).toUppercase()}</h2>
            <p>{body.slice(0,100)}</p>
          </div>
          
        })} 
     </div>
    </>
  )
    
}

export default App
