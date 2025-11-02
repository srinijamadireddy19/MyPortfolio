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


const AllProjects = ({onBack}) => {
  const projects = [
    {
      id: 1,
      title: 'Fashion-MNIST Neural Network from Scratch',
      startDate: 'Jul 2025',
      endDate: 'Sep 2025',
      description: 'Implemented a fully connected neural network for Fashion-MNIST image classification entirely from scratch using NumPy — no TensorFlow or PyTorch.',
      details: 'Built core DL components manually including forward & backward propagation, ReLU and Softmax activations, dropout, L2 regularization, mini-batch training, Adam optimizer, early stopping, and gradient clipping to deeply understand model internals.',
      image: fashion,
      technologies: ['Python', 'NumPy', 'Deep Learning', 'Neural Networks', 'From-Scratch Implementation'],
      links: {
        kaggle: 'https://www.kaggle.com/code/madisrinija/fashion-mnist-image-classifier',
        github: 'https://github.com/srinijamadireddy19/Fashion-MNIST-Classification-From-Scratch'
      }
    },
    {
      id: 2,
      title: 'TabNet for Tabular Data Classification',
      startDate: 'Oct 2025',
      endDate: 'Nov 2025',
      description: 'Explored TabNet, a deep learning architecture designed for tabular data, by applying it to the Binary Classification with a Bank Dataset competition on Kaggle.',
      details: 'Implemented and fine-tuned a TabNet model leveraging sequential attention for feature selection. Achieved 0.95518 accuracy and ranked 2012 on the leaderboard. Gained insights into model explainability, feature importance, and real-world experimentation in deep learning.',
      image: bank,
      technologies: ['Python', 'Deep Learning', 'TabNet', 'PyTorch', 'Explainable AI', 'Tabular Data'],
      links: {
        kaggle: 'https://www.kaggle.com/competitions/playground-series-s5e8',
        github: 'https://github.com/srinijamadireddy19/Binary-Classification-with-a-Bank-Dataset' // optional if you post about it
      }
    },
    {
      id: 3,
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
      id: 4,
      title: 'Loan Approval Prediction',
      startDate: 'Jun 2025',
      endDate: 'Aug 2025',
      description: 'Developed a predictive model to determine loan approval likelihood based on applicant financial and demographic data using machine learning techniques.',
      details: 'Applied feature engineering and model tuning to improve accuracy; compared Logistic Regression, Decision Trees, and Random Forest classifiers.',
      image: loan,
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      links: {
        kaggle: 'https://www.kaggle.com/code/madisrinija/loan-approval-prediction',
        github: "https://github.com/srinijamadireddy19/Predicting-Loan-Approval-Status"
      }
    },
    {
      id: 5,
      title: 'Heart Disease Prediction Model',
      startDate: 'Sep 2025',
      endDate: 'Nov 2025',
      description: 'Built a machine learning model to predict the presence of heart disease using patient clinical and diagnostic data.',
      details: 'Performed data cleaning, feature selection, and compared multiple classifiers; highlighted how variables like chest pain type and blood pressure influence risk.',
      image: heart,
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Data Visualization'],
      links: {
        kaggle: 'https://www.kaggle.com/code/madisrinija/heart-diesease-model',
      }
    },
    {
      id: 6,
      title: 'Titanic Survival Prediction',
      startDate: 'Jan 2025',
      endDate: 'Mar 2025',
      description: 'Built a classification model to predict survival on the Titanic sinking using passenger data including demographics, ticket class, and fare.',
      details: 'Performed data cleaning and feature engineering (e.g., extracting titles from names, family size from SibSp/Parch), compared multiple classifiers, and optimized for accuracy. Utilised train/test split and cross-validation for robust evaluation.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Feature Engineering'],
      links: {
        kaggle: 'https://www.kaggle.com/code/madisrinija/titanic-dataset',
        github: 'https://github.com/srinijamadireddy19/Titanic---Machine-Learning-from-Disaster'
      }
    },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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