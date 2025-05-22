import { Project } from '@/types/types'
import React from 'react'

type projectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: projectCardProps) => {
    return (
        <div className='rounded p-4 shadow border'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Start Date: {project.startDate}</p>
            <p>End Date: {project.endDate}</p>
        </div>
    )
}

export default ProjectCard