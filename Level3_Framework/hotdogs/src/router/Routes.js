import React from 'react'
import { Route} from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";


function Routes() {
    return (
        <>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' component={Contact}/> 
        </>
    )
}

export default Routes
