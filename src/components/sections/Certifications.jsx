import { useState } from 'react';
import './Sections.css';
import forage from '../../assets/forage.png';
import GoogleDataAnalytics from '../../assets/GoogleDataAnalytics.jpeg';
import techtip24 from '../../assets/techtip24.jpeg';
import dl from '../../assets/dl.png';
import certifications from '../../data/certifications';

const Certifications = ({ onShowAll }) => {
  const featuredCertificationsIds = [1, 2];
  
  const [expandedId, setExpandedId] = useState(null);
  
  const displayedCertifications = certifications.filter(cert =>
    featuredCertificationsIds.includes(cert.id)
  );
  
  const [showAll, setShowAll] = useState(false);


  return (
    <section id="certifications" className="certifications-section">
      <div className="section-content">
        <h2>Certifications</h2>
        <div className="certifications-list">
          {displayedCertifications.map(cert => (
            <div className="certification-card" key={cert.id}>
                <div className="certification-expanded">
                  <div className="certification-header">
                    <h3>{cert.title}</h3>
                    <div className="certification-meta">
                      <span className="certification-issuer">{cert.issuer}</span>
                      <span className="certification-date">{cert.date}</span>
                    </div>
                  </div>
                  <div className="certification-content">
                    <p>{cert.description}</p>
                    
                  </div>
                </div>

            </div>
          ))}
        </div>
        <button className="show-all-btn" onClick={onShowAll} >
          Show All Certifications
        </button>
      </div>
    </section>
  );
};

export default Certifications;