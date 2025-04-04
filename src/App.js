import React from "react";
import './App.css';
import './styles.css';
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";


function App(){
    return(
        <div className="App">
            <Navigation />
            <div className="grey-body">
                <AboutMe />
                <Skills />
            </div>
            
        </div>
        
    )
}

export default App