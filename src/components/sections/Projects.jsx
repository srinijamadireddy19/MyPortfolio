import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sections.css';
import animals from '../../assets/animals.jpeg';
import spam from '../../assets/spam.jpg';
import fashion from '../../assets/fashion.png';
import projects from '../../data/projects';

const Projects = ({ onShowAll }) => {
  const navigate = useNavigate();

  const featuredProjectIds = [3, 1, 4];

  const [expandedId, setExpandedId] = useState(null);

  const displayedProjects = projects.filter(project =>
    featuredProjectIds.includes(project.id)
  );

  return (
    <section id="projects" className="projects-section">
      <div className="section-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-expanded">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  
                </div>
                <div className="project-content">
                  <div className="project-details">
                    <p>{project.details}</p>
                    <div className="technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                        {project.links?.github && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            GitHub
                          </a>
                        )}
                        {project.links?.live && (
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            Live Demo
                          </a>
                        )}
                      </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="show-all-btn" onClick={onShowAll}>
          Show All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
