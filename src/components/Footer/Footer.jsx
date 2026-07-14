import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <h2>🦷 SmileCare</h2>

        <p>
          Providing quality dental care with advanced technology
          and compassionate professionals.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © 2026 SmileCare Dental Clinic. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;