import "./Features.css";

const features = [
  {
    icon: "🦷",
    title: "Experienced Dentists",
    description:
      "Our skilled dental professionals provide high-quality treatments with years of clinical experience.",
  },
  {
    icon: "💙",
    title: "Modern Equipment",
    description:
      "We use advanced dental technology for accurate diagnosis and comfortable treatment.",
  },
  {
    icon: "😊",
    title: "Comfortable Care",
    description:
      "A friendly environment designed to make every patient feel relaxed and confident.",
  },
  {
    icon: "⏰",
    title: "Emergency Support",
    description:
      "Quick assistance for urgent dental care whenever you need us.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose SmileCare?</h2>
          <p>
            We combine expertise, technology, and compassionate care to give
            every patient the best dental experience.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;