import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Layout from "./components/Layout/Index";
import Home from "./components/Home/Index";
import About from './components/About/Index';
import Property from "./components/Property/Index";
import Agent from "./components/Agent/Index";
import SignIn from "./components/Signin/Index";
import Login from "./components/Login/Index";

import './App.scss'



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/property" element={<Property />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/agent" element={<Agent />} />
                </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="login" element={<Login />}  />    
            </Routes>
        </Router>
    )
}
export default App;