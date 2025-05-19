import React from "react";
import './App.css';
import './styles.css';
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import MyServices from "./components/MyServices";
import TechStack from "./components/TechStack";
import MyProjects from "./components/MyProjects";
import MyCertificates from "./components/MyCertificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
    return(
        <div className="App">
            <Navigation />
            <div className="grey-body">
                <AboutMe />
                <MyServices />
                <TechStack />
                <MyProjects />
                <MyCertificates />
                <Contact />
                <Footer />
            </div>
            
        </div>
        
    )
}

export default App