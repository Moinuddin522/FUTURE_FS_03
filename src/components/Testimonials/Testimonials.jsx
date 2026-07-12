import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    review:
      "The dentists were incredibly professional and friendly. My treatment was painless, and I couldn't be happier with my smile.",
  },
  {
    name: "Michael Brown",
    role: "Patient",
    review:
      "Excellent service and modern equipment. The staff made me feel comfortable throughout the entire procedure.",
  },
  {
    name: "Emily Davis",
    role: "Patient",
    review:
      "Highly recommended! Clean clinic, experienced doctors, and outstanding patient care.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="testimonials"
      id="testimonials"
      data-aos="fade-up"
    >
      <div className="container">

        <div className="section-title">
          <h2>What Our Patients Say</h2>

          <p>
            Thousands of happy patients trust SmileCare
            for their dental health.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div
              className="testimonial-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p>"{item.review}"</p>

              <h4>{item.name}</h4>

              <span>{item.role}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;