import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-list">
                {skills.map(skill => (
                    <div key={skill} className="skill">
                        <h3>{skill}</h3>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
