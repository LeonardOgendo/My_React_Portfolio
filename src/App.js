import React from "react";
import './App.css';
import './styles.css';
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";

function App(){
    return(
        <div className="App">
            <Navigation />
            <div className="grey-body">
                <AboutMe />
                <Skills />
                <TechStack />
            </div>
            
        </div>
        
    )
}

export default App