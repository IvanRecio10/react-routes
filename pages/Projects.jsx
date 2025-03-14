import React from "react";
import projects from "../data/projects"; 

function Projects() {
  return (
    <>
      <h1>Estos son los projects:</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <img src={project.Image} 
               style={{ maxWidth: "1280px", width: "766px", height: "431px", margin: "0px" }}
               alt="" />
          <p>{project.description}</p>
          <a href={`mailto:${project.url}`}>{project.url}</a> 
        </div>
      ))}
    </>
  );
}

export default Projects;
