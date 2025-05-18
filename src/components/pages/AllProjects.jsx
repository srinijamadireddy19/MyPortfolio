import { useState } from 'react';
import '../pages/AllProjects.css';
import animals from '../../assets/animals.jpeg';
import spam from '../../assets/spam.jpg';
import SalesDashboard from '../../assets/SalesDashboard.png';
import CosmeticDB from '../../assets/CosmeticDB.png';
import Herhaven from '../../assets/Herhaven.png';
import TenderHub from '../../assets/TenderHub.png';
import HR from '../../assets/HR.png';

const AllProjects = ({onBack}) => {
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
    title: 'Sales Analysis Dashboard  ',
    startDate: 'Feb 2025',
    endDate: 'Feb 2025',
    description: 'Designed an interactive Power BI dashboard to analyze sales performance across regions, time periods, and product categories.',
    details: 'The dashboard provides insights into revenue trends, customer segmentation, and key business drivers to support data-driven decision-making.',
    image: SalesDashboard,
    technologies: ['PowerBI', 'Buisness Intelligence'],
    links: {
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.com'
    }
  },
  {
    id: 4,
    title: 'Cosmetic Product Segmentation',
    startDate: 'Sep 2023',
    endDate: 'Dec 2023',
    description: 'Built an interactive dashboard using R Shiny and ggplot2 to segment and visualize cosmetic products.',
    details: 'Categorized products based on age, gender and chemicals used to support targeted marketing strategies.',
    image: CosmeticDB,
    technologies: ['R Language', 'Shiny', 'ggplot2'],
    links: {
      github: 'https://github.com/srinijamadireddy19/Cosmetic-Product-Segmentation.git',
    }
  },
  {
    id: 5,
    title: 'HerHaven - Women Community Forum ',
    startDate: 'Jan 2025',
    endDate: 'Apr 2025',
    description: 'Built a React-based safety platform focused on women’s security. It includes a community forum for sharing experiences and advice, and a safety alert system for emergencies.',
    details: 'It aims to empower women by providing a supportive online space and quick access to safety resources.',
    image: Herhaven,
    technologies: ['React', 'MongoDB', 'Spring Boot', 'Java'],
    links: {
      github: 'https://github.com/srinijamadireddy19/HerHaven.git',
    }
  },
  {
    id: 6,
    title: 'TenderHub',
    startDate: 'Aug 2024',
    endDate: 'Nov 2024',
    description: 'Created a cloud-based tender management application using Flask and AWS. ',
    details: 'The system allows admins to post tenders and manage vendors, while vendors can submit bids and track their statuses. Includes features like bid selection and tender tracking.',
    image: TenderHub,
    technologies: ['Flask', 'Python', 'cloud', 'SQLite', 'AWS'],
    links: {
      github: 'https://github.com/srinijamadireddy19/Tender-Management-System.git',
    }
  },
  {
    id: 7,
    title: 'Attrition Dashboard',
    startDate: 'Mar 2025',
    endDate: 'Mar 2025',
    description: 'Designed a comprehensive Power BI dashboard to visualize employee attrition patterns. ',
    details: 'Analyzed factors like job role, salary, work environment, and satisfaction to identify trends and potential retention strategies.',
    image: HR,
    technologies: ['PowerBI', 'Buisness Intelligence'],
    links: {
      github: 'https://github.com/srinijamadireddy19/Attrition-Dashboard.git',
    }
  }
];

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
                        {project.links?.live && (
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="card-image">
                      <img src={project.image} alt={project.title} />
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