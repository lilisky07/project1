import React from 'react';
import './Projects.css';

const projects = [
    { title: 'Project 1', description: 'UI/UX Design' },
    { title: 'Project 2', description: 'Web Development' },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
