import './Sections.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-content">
        <h2>Contact</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-method">
              <h3>Email</h3>
              <p>
                You can reach me at{' '}
                <a href="mailto:srinijamadireddy111@gmail.com">
                  srinijamadireddy111@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-method">
              <h3>Address</h3>
              <p>Silver Shades</p>
              <p>Upperpally, Hyderabad</p>
              <p>Telangana, India</p>
              <p>Pin Code: 500100</p>
            </div>
          </div>
          <div className="contact-thanks">
            <p>Thank you for visiting my website. I look forward to hearing from you!</p>
            <p> Feel free to drop me an email anytime — I’m excited to connect with you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
