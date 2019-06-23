import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav =()=>
        <div id="nav">
            <ul>
            <li><NavLink to='/' style ={{color:'#2e2e2e', textDecoration: 'none'}}  >
            {'Menu'.toUpperCase()}</NavLink></li>
                <li>CATERING</li>
                <li>ABOUT US</li>
                <li><NavLink to='/contact' style ={{color:'#2e2e2e', textDecoration: 'none'}}  >CONTACT</NavLink></li>
            </ul>
        </div>

export default Nav
