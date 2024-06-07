import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  // Check if projects is undefined or null before attempting to map
  if (!projects) {
    return <div>No projects available</div>;
  }

  return (
    <div className="project-list">
      {projects.map(project => (
        <div className="project-preview" key={project.id}>
          <Link to={`/project/${project.id}`}>
            <h2>{project.title}</h2>
            <p>{project.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ProjectList;