import "./Hero.css";
import heroImage from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            🦷 Trusted Dental Clinic
          </span>

          <h1>
            Healthy Smiles
            <br />
            Begin Here
          </h1>

          <p>
            We provide advanced dental care with experienced professionals,
            state-of-the-art technology, and personalized treatment plans
            for the entire family.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Book Appointment
            </button>

            <button className="secondary-btn">
              Our Services
            </button>

          </div>

          <div className="hero-stats">

            <div className="stat-box">
              <h2>5000+</h2>
              <span>Happy Patients</span>
            </div>

            <div className="stat-box">
              <h2>15+</h2>
              <span>Years Experience</span>
            </div>

            <div className="stat-box">
              <h2>10+</h2>
              <span>Expert Dentists</span>
            </div>

          </div>

        </div>

        <div className="hero-image">
          <img src={heroImage} alt="SmileCare Dental Clinic" />
        </div>

      </div>
    </section>
  );
};

export default Hero;