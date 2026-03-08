import { useState } from 'react';
import '../pages/AllProjects.css';
import animals from '../../assets/animals.jpeg';
import spam from '../../assets/spam.jpg';
import SalesDashboard from '../../assets/SalesDashboard.png';
import CosmeticDB from '../../assets/CosmeticDB.png';
import Herhaven from '../../assets/Herhaven.png';
import TenderHub from '../../assets/TenderHub.png';
import HR from '../../assets/HR.png';
import bank from '../../assets/bank.png';
import loan from '../../assets/loan.png';
import heart from '../../assets/heart.png';
import fashion from '../../assets/fashion.png';
import projects from '../../data/projects';
import diabetes from '../../assets/diabetes.png';
import goodreads from '../../assets/goodreads.png';
import googleplay from '../../assets/googleplay.png';
import webscraper from '../../assets/webscraper.png';
import youtube from '../../assets/youtube.png';

const AllProjects = ({onBack}) => {
  const imageMap = {
    animals,
    spam,
    SalesDashboard,
    CosmeticDB,
    Herhaven,
    TenderHub,
    HR,
    bank,
    loan,
    heart,
    fashion,
    diabetes,
    goodreads,
    googleplay,
    webscraper,
    youtube
  };

  const [expandedId, setExpandedId] = useState(null);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="all-items-page">
      <div className="back-button" onClick={onBack}>
        <span>←</span> Back
      </div>
      <div className="section-content">
        <h2>All Projects</h2>
        <div className="horizontal-cards">
          {projects.map(project => (
            <div className="horizontal-card" key={project.id}>
              {expandedId === project.id ? (
                <div className="card-expanded">
                  <div className="card-header">
                    <h3>{project.title}</h3>
                    <p className="card-date">{project.startDate} - {project.endDate}</p>
                  </div>
                  <div className="card-content">
                    <div className="card-details">
                      <p className="card-description">{project.description}</p>
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
                        {project.links?.kaggle && (
                          <a href={project.links.kaggle} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            Kaggle
                          </a>
                        )}
                        {project.links?.live && (
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="card-image">
                      <img src={imageMap[project.image]} alt={project.title} />
                    </div>
                  </div>
                  <button 
                    className="view-toggle"
                    onClick={() => setExpandedId(null)}
                  >
                    View Less
                  </button>
                </div>
              ) : (
                <div className="card-collapsed">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button 
                    className="view-toggle"
                    onClick={() => setExpandedId(project.id)}
                  >
                    View More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;