import React from "react";
import resume from "../data/resume";

function Resume() {
    return (
        <>
        <h1>Studies:</h1>
        {resume.studies.map((study)=> (
            <div key={study.id}>
                <h2>{study.title}</h2>
                <p>{study.institucion}</p>
                <p>{study.date}</p>
            </div>
        ))}
        <h1>Experiences:</h1>
        {resume.experiences.map((expe) => (
            <div key={expe.id}>
                <h2>{expe.title}</h2>
                <p>{expe.company}</p>
                <p>{expe.date}</p>
            </div>
        ))}
        </>
    )
}

export default Resume