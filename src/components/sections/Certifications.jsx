import { useState } from 'react';
import './Sections.css';
import forage from '../../assets/forage.png';
import GoogleDataAnalytics from '../../assets/GoogleDataAnalytics.jpeg';
import techtip24 from '../../assets/techtip24.jpeg';
import dl from '../../assets/dl.png';

const Certifications = ({ onShowAll }) => {
  const certifications = [
    {
      id: 1,
      title: 'Deep Learning',
      issuer: 'Coursera',
      date: 'Aug 2025',
      description: 'Completed an industry-recognized Deep Learning certification covering neural networks, CNNs, RNNs, and model optimization. Gained hands-on experience with TensorFlow and PyTorch frameworks.',
      details: "Acquired skills in building and deploying deep learning models for image recognition, natural language processing, and time series forecasting. Course Certificates Completed: Neural Networks and Deep Learning, Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization, Structuring Machine Learning Projects, Convolutional Neural Networks, Sequence Models",
      CredentialId : 'A2QCOAQ6KQTM',
      url:'https://coursera.org/verify/specializat ion/A2QCOAQ6KQTM',
      skills:['Neural Networks','Convolutional Neural Networks (CNNs)','Recurrent Neural Networks (RNNs)','TensorFlow','PyTorch','Model Optimization','Deep Learning Applications'],
      image: dl
    },
    {
      id: 2,
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera',
      date: 'Mar 2025',
      description: 'Completed the Google Data Analytics Professional Certificate, gaining hands-on experience with data cleaning, analysis, and visualization. Learned tools like Excel, SQL, and R to solve real-world business problems using data.',
      details: "Developed critical thinking and data storytelling skills to support data-driven decision-making. Applied industry-standard practices across the entire data analysis lifecycle. Course Certificates Completed: Foundations: Data, Data, Everywhere, Ask Questions to Make Data-Driven Decisions, Prepare Data for Exploration, Process Data from Dirty to Clean, Analyze Data to Answer Questions, Share Data Through the Art of Visualization,Data Analysis with R Programming, Google Data Analytics Capstone: Complete a Case Study",
      CredentialId : 'SU4D6YNFE9NI',
      url:'https://coursera.org/verify/professional-cert/SU4D6YNFE9NI',
      skills:['Spreadsheet Software','Data Management','Data Analysis','Business Communication','General Statistics','Business Analysis','Data Visualization','SQL'],
      image: GoogleDataAnalytics
    },
    {
      id: 3,
      title: 'Accenture North America - Data Analytics and Visualization Job Simulation',
      issuer: 'Forage',
      date: 'Jan 2025',
      description: 'Completed a virtual job simulation by Accenture North America focused on data analytics and visualization tasks.Analyzed client datasets, identified business insights, and created compelling visuals to present findings.',
      details: 'Gained practical experience in Excel, data storytelling, and consulting-style communication.Simulated real-world scenarios to enhance problem-solving and client presentation skills.',
      CredentialId : 'FBKh3H7NiSM3hPNMo',
      url:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_jN35Nu5G7htzodefY_1737723725825_completion_certificate.pdf',
      skills:['Data Analytics' , 'Data Visualization'],
      image: forage
    },
    {
      id: 4,
      title: 'CERTIFICATE of PARTICIPATION',
      issuer: 'TechTip24',
      date: 'Mar 2025',
      description: 'Earned a Certificate of Participation from TechTip24 for completing a hands-on Power BI project.Built a dynamic Sales Analysis Dashboard using Power BI to visualize KPIs and sales trends.',
      details: 'Gained practical experience in data modeling, DAX, and interactive dashboard creation. Demonstrated the ability to turn raw data into actionable business insights.',
      image: techtip24
    }
  ];

  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 2);

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