import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section
      className="contact"
      id="contact"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="section-title">
          <h2>📞 Get In Touch</h2>

          <p>
            Ready for a healthier smile? Contact our
            experienced dental team today.
          </p>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Book Your Appointment Today</h3>

            <p>
              We provide comfortable, high-quality dental
              care for you and your family.
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

          <form className="contact-form">

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

        <div className="map">
          <iframe
            title="SmileCare Clinic"
            src="https://www.google.com/maps?q=Hyderabad&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;