import React from "react";
import './App.css';
import './styles.css';
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import MyProjects from "./components/MyProjects";
import MyCertifications from "./components/MyCertifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
    return(
        <div className="App">
            <Navigation />
            <div className="grey-body">
                <AboutMe />
                <Skills />
                <TechStack />
                <MyProjects />
                <MyCertifications />
                <Contact />
                <Footer />
            </div>
            
        </div>
        
    )
}

export default App