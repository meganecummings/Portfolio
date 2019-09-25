import React from 'react';
import Project from './Project/Project';
import './ProjectList.css';

const ProjectList = () => {
    return(
        <div id="work">
            <h3 className="tech-title">Concept Project List</h3>
            <div id="project">            
                <Project />
            </div>

        </div>
    );
};

export default ProjectList;
