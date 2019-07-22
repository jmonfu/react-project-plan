import React from 'react'
import ProjectSummary from '../projects/ProjectSummary'
import { Link } from 'react-router-dom'

//taking the projects as a prop here
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {/* this means if we have projects, then map them, if we don't have, ignore */}
            { projects && projects.map(project => {
                return(
                    <Link to={'/project/' + project.id} key={project.id}>
                        <ProjectSummary project={project}  />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList