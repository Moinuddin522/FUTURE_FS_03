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
    <section className="testimonials">
      <div className="container">

        <div className="section-title">
          <h2>What Our Patients Say</h2>
          <p>
            Thousands of happy patients trust SmileCare for their dental health.
          </p>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;