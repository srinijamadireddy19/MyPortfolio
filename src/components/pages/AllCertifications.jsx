import { useState } from 'react';
import '../pages/AllCertifications.css';
import { useNavigate } from 'react-router-dom';
import forage from '../../assets/forage.png';
import GoogleDataAnalytics from '../../assets/GoogleDataAnalytics.jpeg';
import techtip24 from '../../assets/techtip24.jpeg';
import arvr from '../../assets/arvr.jpeg';
import BICoursera from '../../assets/BICoursera.png';
import pandas from '../../assets/pandas.png';
import pythonprog from '../../assets/pythonprog.png';
import tableau from '../../assets/tableau.png'
import dl from '../../assets/dl.png';
import certifications from '../../data/certifications';


const AllCertifications = ({ onBack }) => {
  const navigate = useNavigate();
  
  const imageMap = {
  forage,
  google: GoogleDataAnalytics,
  techtip24,
  arvr,
  bicoursera: BICoursera,
  pandas,
  pythonprog,
  tableau,
  dl
};

  const [expandedId, setExpandedId] = useState(null);

  

  return (
    <div className="all-items-page">
      <div className="back-button" onClick={() => navigate(-1)}>
        <span>←</span> Back
      </div>
      <div className="cert-section-content">
        <h2>All Certifications</h2>
        <div className="horizontal-cards">
          {certifications.map(cert => (
            <div className="horizontal-card" key={cert.id}>
              {expandedId === cert.id ? (
                <div className="card-expanded">
                  <div className="card-header">
                    <h3>{cert.title}</h3>
                    <div className="card-meta">
                      <span>{cert.issuer}</span> <br/>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <div className="cert-card-content">
                    <p>{cert.description}</p>
                    <p>{cert.details}</p>     
                    {cert.CredentialId && (
                      <p><strong>Credential ID:</strong> {cert.CredentialId}</p>
                    )}         
                      {cert.url && (
                        <p>
                          <strong>Credential URL:</strong>{' '}
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.url}</a>
                        </p>
                      )}

                      {cert.skills && cert.skills.length > 0 && (
                        <div className="skills">
                          <strong>Skills:</strong>
                          <div className="skills">
                            <strong>Skills:</strong>
                            <div className="skills-list">
                              {cert.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">{skill}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    <div className="card-image">
                      <img src={imageMap[cert.image]} alt={cert.title} />
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
                  <h3>{cert.title}</h3>
                  <div className="card-meta">
                    <span>{cert.issuer}</span> <br/>
                    <span>{cert.date}</span>
                  </div>
                  <p>{cert.description}</p>
                  <button 
                    className="view-toggle"
                    onClick={() => setExpandedId(cert.id)}
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

export default AllCertifications;