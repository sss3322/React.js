import React, { useState } from 'react'
import axios from 'axios'

function Axios2() {
    const[input,setInput]=useState([])
    const getdata=async()=>{
        let response =await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(response.data)
        setInput(response.data)
    }
  return (
    <div>
        <h1>API</h1>
        <button onClick={getdata}>Get data</button>
        {input.map((data)=>{
            return(
            <div>
                <h1>{data.userId}</h1>
                <h2>{data.id}</h2>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>
        )}
        )}
    </div>
  )
}

export default Axios2