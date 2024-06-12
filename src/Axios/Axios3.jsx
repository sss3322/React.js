import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios3() {
    const[input,setInput]=useState([])

    useEffect(()=>{
        getdata();
    },[] )
    const getdata=async()=>{
        let response =await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data)
        setInput(response.data)
    }
  return (
    <div>
        
        {input.map((data)=>{
            return(
            <div>
                <h2>{data.id}</h2>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>
        )}
        )}
    </div>
  )
}

export default Axios3