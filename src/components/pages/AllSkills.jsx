import { useState } from 'react';
import '../pages/AllSkills.css';

const AllSkills = ({onBack}) => {
  const skillCategories = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: '🐍', level: 'Expert' },
      { name: 'R', icon: '📊', level: 'Expert' },
      { name: 'Java', icon: '☕', level: 'Intermediate' },
      { name: 'SQL (MySQL)', icon: '🛢️', level: 'Expert' },
    ],
  },
  {
    category: 'Machine Learning & Data Science',
    skills: [
      { name: 'Model Building', icon: '🧠', level: 'Expert' },
      { name: 'Data Analytics', icon: '📈', level: 'Advanced' },
      { name: 'Feature Engineering', icon: '🧬', level: 'Intermediate' },
      { name: 'TensorFlow', icon: '🧠', level: 'Intermediate' },
      { name: 'Machine Learning', icon: '🤖', level: 'Intermediate' },
      { name: 'Deep Learning', icon: '🧬', level: 'Intermediate' },
      { name: 'Neural Networks', icon: '🕸️', level: 'Intermediate' },
      { name: 'CNNs & RNNs', icon: '🧩', level: 'Intermediate' },
      { name: 'Data Preprocessing', icon: '🧹', level: 'Intermediate' },
      { name: 'Model Optimization', icon: '⚡', level: 'Intermediate' },
      { name: 'Computer Vision', icon: '📸', level: 'Intermediate' },
      { name: 'NLP', icon: '💬', level: 'Intermediate' },

    ],
  },
  {
    category: 'Data Visualization',
    skills: [
      { name: 'Matplotlib', icon: '📉', level: 'Advanced' },
      { name: 'Seaborn', icon: '🌊', level: 'Advanced' },
      { name: 'ggplot2', icon: '📐', level: 'Advanced' },
      { name: 'Power BI', icon: '📊', level: 'Expert' },
      { name: 'Tableau', icon: '📈', level: 'Expert' },
    ],
  },
  {
    category: 'Cloud & Platforms',
    skills: [
      { name: 'AWS EC2', icon: '🖥️', level: 'Advanced' },
      { name: 'AWS S3', icon: '🗃️', level: 'Advanced' },
      { name: 'AWS RDS', icon: '💾', level: 'Intermediate' },
      { name: 'Google Cloud', icon: '📂', level: 'Intermediate' },
      { name: 'Elastic Beanstalk', icon: '🌿', level: 'Intermediate' },
      { name: 'Salesforce', icon: '☁️', level: 'Intermediate' },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: '🧱', level: 'Expert' },
      { name: 'CSS', icon: '🎨', level: 'Advanced' },
      { name: 'JavaScript', icon: '📜', level: 'Advanced' },
      { name: 'ReactJS', icon: '⚛️', level: 'Expert' },
    ],
  },
  {
    category: 'Productivity Tools',
    skills: [
      { name: 'Excel', icon: '📊', level: 'Expert' },
      { name: 'Google Sheets', icon: '🧾', level: 'Advanced' },
      { name: 'VLOOKUP', icon: '🔍', level: 'Advanced' },
      { name: 'Pivot Tables', icon: '🔄', level: 'Advanced' },
      { name: 'Data Cleaning', icon: '🧹', level: 'Advanced' },
    ],
  },
];


  const [expandedSkill, setExpandedSkill] = useState(null);


  return (
    <div className="skills-page">
      <div className="skills-back-button" onClick={onBack}>
        <span>←</span> Back
      </div>
      <div className="skills-section-content">
        <h2>All Skills</h2>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="skill-category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => {
                const skillKey = `${category.category}-${skillIndex}`;
                const isExpanded = expandedSkill === skillKey;

                return (
                  <div
                    key={skillKey}
                    onClick={() =>
                      setExpandedSkill(isExpanded ? null : skillKey)
                    }
                  >
                    <div className="skill-card">
                    <span className="skill-icon">{skill.icon}</span>
                    <h4>{skill.name}</h4>
                    <div className="skill-details">
                      <div className="skill-level">
                        <div className="level-bar" style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <p>Proficiency: {skill.level}</p>
                    </div>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
