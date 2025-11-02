import './Sections.css';

const Links = () => {
  const links = [
    {
      id: 1,
      name: 'GitHub',
      url: 'https://github.com/srinijamadireddy19',
      icon: '📁'
    },
    {
      id: 2,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/srinijamadireddy-2b6163270',
      icon: '💼'
    },
    {
      id: 3,
      name: 'Kaggle',
      url: 'https://www.kaggle.com/madisrinija',
      icon: '🖥️'
    },
    {
      id: 4,
      name: 'Medium',
      url: 'https://medium.com/@srinijamadireddy111/about',
      icon: '📈'
    },
    {
      id: 5,
      name: 'Google Cloud Skills Boost',
      url: ' https://www.cloudskillsboost.google/public_profiles/36ec92e5-e79b-4fd2-832f-65d4ca4531fe',
      icon: '💻'
    },
    {
      id: 6,
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1ae5kgKGx_TaZPdCkC1_cUCe6kFw2YpGn/view?usp=sharing',
      icon: '📄'
    },
    {
      id: 7,
      name: 'Salesforce Trailhead',
      url: 'https://www.salesforce.com/trailblazer/d6k3fz0nrqp39x1pg2',
      icon: '☁️'
    }
  ];

  return (
    <section id="links" className="links-section">
      <div className="section-content">
        <h2>Links</h2>
        <div className="links-container">
          {links.map(link => (
            <a 
              key={link.id} 
              href={link.url} 
              className="link-card"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="link-icon">{link.icon}</span>
              <span className="link-name">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;