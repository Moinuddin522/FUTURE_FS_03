import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            🦷 Trusted Dental Clinic
          </span>

          <h1>
            Your Smile,
            <br />
            Our Priority
          </h1>

          <p>
            Experience world-class dental care with modern equipment,
            experienced dentists, and personalized treatment for your
            entire family.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Book Appointment
            </button>

            <button className="btn-secondary">
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h2>5000+</h2>
              <p>Happy Patients</p>
            </div>

            <div className="stat">
              <h2>15+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat">
              <h2>10+</h2>
              <p>Expert Dentists</p>
            </div>
          </div>
        </div>

        <div className="hero-image placeholder">
          <h2>🦷</h2>
          <p>Dental Clinic Image</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;