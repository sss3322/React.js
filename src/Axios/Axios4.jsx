import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios4() {
    const[input,setInput]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response.data)
            setInput(response.data)
        })
    })
  return (
    <div>
        
        {input.map((data)=>{
            return(
            <div>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.username}</p>
                <p>{data.email}</p>
                
            </div>
        )}
        )}
    </div>
  )
}

export default Axios4