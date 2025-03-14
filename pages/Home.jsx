import React from "react";
import { Link } from "react-router-dom"; 

function Home() {
    return (
        <>
            <h1>BIENVENIDOS A REACT ROUTES PORFOLIO</h1>
            <nav>
                <Link to="/projects">Ir a Projects</Link>
                <br />
                <Link to="/resume">Ir a Resume</Link>
            </nav>
        </>
    );
}

export default Home;
