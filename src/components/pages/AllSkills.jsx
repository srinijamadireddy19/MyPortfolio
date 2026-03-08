import { useState } from 'react';
import '../pages/AllSkills.css';
import skillCategories from '../../data/skills';

const AllSkills = ({onBack}) => {


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
                        <div className="level-bar" style={{ width: `${skill.value}%` }}></div>
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
