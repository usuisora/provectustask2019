import React from 'react'
import {NavLink} from 'react-router-dom'

let pathes =['/menu','/catering','/about us','/contact'];
let linkStyle = {color:'#2e2e2e', textDecoration: 'none'};
let navLinks = pathes.map(path =>
                            <li key ={path}>
                                <NavLink to={path} style ={linkStyle} >
                                {path.substring(1).toUpperCase()}</NavLink>
                            </li> )

const Nav =()=>
  <div id="nav">
    <ul>
     {navLinks}
    </ul>
</div>

     

export default Nav
