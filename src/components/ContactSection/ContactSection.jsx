import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container contact-container">

        <div className="contact-info">

          <span className="contact-badge">
            📞 Get In Touch
          </span>

          <h2>Book Your Appointment Today</h2>

          <p>
            Ready for a healthier smile? Contact our experienced dental
            team to schedule your appointment. We're here to provide
            comfortable, high-quality dental care for you and your family.
          </p>

          <div className="info-item">
            <h4>📍 Address</h4>
            <p>123 Smile Street, Hyderabad, India</p>
          </div>

          <div className="info-item">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-item">
            <h4>✉ Email</h4>
            <p>info@smilecare.com</p>
          </div>

        </div>

        <div className="contact-form">

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <select>
              <option>Select Service</option>
              <option>Teeth Cleaning</option>
              <option>Dental Implants</option>
              <option>Root Canal</option>
              <option>Orthodontics</option>
              <option>Cosmetic Dentistry</option>
            </select>

            <input type="date" />

            <textarea
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Book Appointment
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;