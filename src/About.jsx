import React from 'react'
import {  useNavigate } from 'react-router-dom'

function About() {
    const nav=useNavigate()
    const func=()=>{
        nav('/address')
    }
  return (
    <div>
        <h1 onClick={func}>This is about page</h1>
    </div>
  )
}

export default About