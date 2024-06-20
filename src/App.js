import React from "react";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import './App.css';

function App(){
    return(
        <div className="App">
            <Navigation />
            <div className="grey-body">
                <AboutMe />
            </div>
            
        </div>
        
    )
}

export default App