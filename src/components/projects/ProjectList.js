import React from 'react'
import ProjectSummary from '../projects/ProjectSummary';

//taking the projects as a prop here
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {/* this means if we have projects, then map them, if we don't have, ignore */}
            { projects && projects.map(project => {
                return(
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList