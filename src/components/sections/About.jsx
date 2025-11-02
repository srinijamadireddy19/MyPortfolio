import './Sections.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-content">
        <h2>The Story So Far</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm a student with a strong passion for programming and a growing interest in data science. 
              I’m fascinated by how data can be transformed into insights that drive real-world decisions. 
              As I build my foundation in programming, I'm focusing on learning key data science tools and concepts,
               including Python, Deep Learning, NumPy, data visualization, and machine learning.
            </p>
            <p>
             I'm actively working on small projects that involve data analysis, cleaning, and basic 
             predictive modeling to strengthen both my coding skills and analytical thinking. I enjoy 
             exploring datasets, uncovering patterns, and telling stories with data through visualization.
            </p>
            <p>
             This portfolio is a reflection of my learning journey — where I experiment, grow, and share what I create. 
             I'm excited to continue learning, collaborating, and solving meaningful problems through data. 
              I'm always open to new opportunities and challenges, so feel free to reach out if you'd like to connect! 
              Thanks for stopping by!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;