import './Sections.css';

const skillCategories = [
  {
    category: 'Some are',
    skills: [
      { name: 'Python', icon: '🐍', level: 'Expert' },
      { name: 'SQL (MySQL)', icon: '🛢️', level: 'Expert' },
      { name: 'Data Analytics', icon: '📈', level: 'Advanced' },
      { name: 'Machine Learning', icon: '🧠', level: 'Expert' },
      { name: 'Seaborn', icon: '🌊', level: 'Advanced' },
      { name: 'AWS', icon: '🖥️', level: 'Intermediate' },
      { name: 'Salesforce', icon: '☁️', level: 'Intermediate' },
      { name: 'Excel', icon: '📊', level: 'Expert' }
    ]
  }
];

const Skills = ({ onShowAll }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-content">
        <h2>Skills (Preview)</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-card">
                    <span className="skill-icon">{skill.icon}</span>
                    <h4>{skill.name}</h4>
                    <div className="skill-details">
                      <div className="skill-level">
                        <div className="level-bar" style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <p>Proficiency: {skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Replace Link with button */}
        <button 
          className="show-all-btn"
          onClick={onShowAll}
        >
          Show All Skills
        </button>
      </div>
    </section>
  );
};

export default Skills;
