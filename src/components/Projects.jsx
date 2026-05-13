
const projects = [
{
id: 1,
title: "Leg Day Tracker",
description: "A workout tracker built in React to log and track progress of your leg day exercises.",
tech: ["React", "JavaScript", "CSS"],
liveUrl: "https://tw-leg-day-tracker.netlify.app/",
githubUrl: "https://github.com/twiinko-rocker/leg-day-tracker"
}
]

function Projects() {
return (
    <section id="projects">
        <h2>Projects</h2>
        {projects.map(project => (
            <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.tech.join(" · ")}</p>
                <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
                    <span> · </span>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
        )
        )}
    </section>
)}


export default Projects