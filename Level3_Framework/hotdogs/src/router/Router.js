
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import Nav from './Nav'
const myRouter =()=>
            <Router>
                <Nav/>
               <Routes/>
            </Router>


export default myRouter;
