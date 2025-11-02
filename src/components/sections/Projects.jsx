import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sections.css';
import animals from '../../assets/animals.jpeg';
import spam from '../../assets/spam.jpg';
import fashion from '../../assets/fashion.png';

const Projects = ({ onShowAll }) => {
  const navigate = useNavigate();

  const projects = [
  {
    id: 1,
    title: 'YouTube Spam Comment Detection',
    startDate: 'Mar 2024',
    endDate: 'May 2024',
    description: 'Developed a machine learning model to identify and filter spam comments on YouTube videos.',
    details: 'Used Bernoulli Naïve Bayes to classify YouTube comments. Automated spam filtering by embedding into a web application.',
    image: spam,
    technologies: ['Python', 'Machine Learning', 'Flask', 'Web Development'],
    links: {
      github: 'https://github.com/srinijamadireddy19/Youtube-spam-comment-detection.git',
      
    }
  },
  {
    id: 2,
    title: 'Adoption Survival Analysis in Animal Shelters',
    startDate: 'Mar 2025',
    endDate: 'May 2025',
    description: 'Performed survival analysis on animal shelter data to identify key factors affecting adoption rates using Kaplan-Meier curves and multivariate Cox regression.',
    details: 'Discovered how traits like age, sex, and intake type influence adoption speed.',
    image: animals,
    technologies: ['Python', 'Machine Learning', 'Survival Analysis'],
    links: {
      github: 'https://github.com/yourusername/animal-shelter-analysis',
    }
  },
  {
    id: 3,
    title: 'Fashion-MNIST Neural Network from Scratch',
    startDate: 'Jul 2025',
    endDate: 'Sep 2025',
        details: 'Built core DL components manually including forward & backward propagation, gradient clipping, etc to deeply understand model internals.',
    image: fashion,
    technologies: ['Python', 'NumPy', 'Deep Learning', 'Neural Networks', 'From-Scratch Implementation'],
    links: {
      kaggle: 'https://www.kaggle.com/code/madisrinija/fashion-mnist-image-classifier',
      github: 'https://github.com/srinijamadireddy19/Fashion-MNIST-Classification-From-Scratch'
    }
  },
];


  const [expandedId, setExpandedId] = useState(null);

  const displayedProjects = projects.slice(0, 3);

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
