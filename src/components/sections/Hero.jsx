import './Sections.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="section-content">
        <h1>Madireddy Srinija</h1>
        <h3>Data Science | Machine Learning | Programmer | Tech Enthusiast</h3>
        <div className="cta-buttons">
          <button className=" primary-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </button>
          <button className=" primary-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </button>
          <button className=" primary-btn" >
            <a className='primary-btn' href='https://drive.google.com/file/d/1ae5kgKGx_TaZPdCkC1_cUCe6kFw2YpGn/view?usp=drive_link'  target="_blank" rel="noopener noreferrer">
            My Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;