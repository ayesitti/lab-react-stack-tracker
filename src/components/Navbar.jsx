import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <h2>Stack Tracker </h2>
      <p><NavLink to="/">Home</NavLink></p>
      
    </nav>
    
  )
}

export default Navbar