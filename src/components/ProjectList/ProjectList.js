import React from 'react';
import Project from './Project/Project';
import './ProjectList.css';

const ProjectList = () => {
    return(
        <div id="work">
            <h3 className="tech-title">Concept Projects</h3>
            <div id="projects">            
                <Project />
            </div>

        </div>
    );
};

export default ProjectList;
