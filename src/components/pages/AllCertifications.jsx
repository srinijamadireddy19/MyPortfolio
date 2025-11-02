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


const AllCertifications = ({ onBack }) => {
  const navigate = useNavigate();
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
      id: 9,
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
      id: 3,
      title: 'CERTIFICATE of PARTICIPATION',
      issuer: 'TechTip24',
      date: 'Mar 2025',
      description: 'Earned a Certificate of Participation from TechTip24 for completing a hands-on Power BI project.Built a dynamic Sales Analysis Dashboard using Power BI to visualize KPIs and sales trends.',
      details: 'Gained practical experience in data modeling, DAX, and interactive dashboard creation. Demonstrated the ability to turn raw data into actionable business insights.',
      image: techtip24
    },
    {
      id: 4,
      title: 'Build Dashboards in Power B',
      issuer: 'Coursera Project Network',
      date: 'May 2023',
      description: 'Successfully completed the "Build Dashboards in Power BI" project offered by Coursera Project Network. Gained hands-on experience in creating interactive dashboards to visualize business data effectively.',
      details: 'Learned to connect data sources, apply DAX formulas, and design user-friendly reports. Strengthened skills in data-driven storytelling using real-world scenarios guided by expert instruction.',
      CredentialId : '9X7VV8D55F32',
      url:'https://coursera.org/verify/9X7VV8D55F32',
      skills:['Power Bi','DAX','Data Analysis'],
      image: BICoursera
    },
    {
      id: 5,
      title: 'Certificate of Participation on Unity',
      issuer: 'ARK',
      date: 'Apr 2024',
      description: 'Participated in a Unity workshop organized by ARK, gaining exposure to game development fundamentals. Explored Unity’s interface, scene building, and basic scripting with C# to create interactive elements.',
      details: 'Understood core concepts like physics, animation, and asset integration in 2D/3D environments. Strengthened foundational skills for developing immersive experiences using Unity.',
      image: arvr
    },
    {
      id: 6,
      title: ' Mastering Data Analysis with Pandas',
      issuer: 'Coursera Project Network',
      date: 'Mar 2023',
      description: 'Successfully completed the "Mastering Data Analysis with Pandas" project offered by Coursera Project Network.Gained practical skills in data manipulation, cleaning, and exploration using the Pandas library in Python.',
      details: 'Worked with real-world datasets to uncover insights through filtering, grouping, and aggregation. Strengthened proficiency in handling large datasets for data science and analytics workflows.',
      CredentialId : 'EJLANGB9UTB5',
      url:'https://coursera.org/verify/EJLANGB9UTB5 ',
      skills:['Python','Pandas','Data Analysis'],
      image: pandas
    },
    {
      id: 7,
      title: 'Introduction to Python Programming',
      issuer: 'University of Pennsylvania via Coursera',
      date: 'Apr 2023',
      description: 'Gained foundational knowledge of Python syntax, control structures, functions, and data types.Developed problem-solving skills through hands-on coding exercises and real-world examples.',
      details: 'Built a strong base for further exploration in programming, data science, and software development.',
      CredentialId : 'HKTN4S6LNEAW',
      url:'https://coursera.org/verify/HKTN4S6LNEAW',
      skills:['Python'],
      image: pythonprog
    },
    {
      id: 8,
      title: 'Fundamentals of Visualization with Tableau',
      issuer: 'UC Davis through Coursera',
      date: 'Jun 2023',
      description: 'Completed the "Fundamentals of Visualization with Tableau" course offered by UC Davis through Coursera. Learned to create impactful visualizations, dashboards, and stories using Tableau.',
      details: 'Explored principles of visual design, data connections, filtering, and calculated fields. Strengthened ability to communicate data-driven insights effectively to diverse audiences.',
      CredentialId : 'RRMX2HSZ7S93',
      url:'https://coursera.org/verify/RRMX2HSZ7S93',
      skills:['Tableau','Buisness Intelligence'],
      image: tableau
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const handleBack = () => {
    navigate(-1); // Go back one page in React Router history stack
  };

  return (
    <div className="all-items-page">
      <div className="back-button" onClick={onBack}>
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
                          <ul>
                            {cert.skills.map((skill, index) => (
                              <span key={index} className="skill-tag">{skill}</span>
                            ))}
                          </ul>
                        </div>
                      )}
                    <div className="card-image">
                      <img src={cert.image} alt={cert.title} />
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