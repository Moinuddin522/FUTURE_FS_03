import "./Services.css";

import {
  FaTooth,
  FaTeeth,
  FaSmile,
  FaChild,
} from "react-icons/fa";

import { MdHealthAndSafety } from "react-icons/md";

import { GiToothbrush } from "react-icons/gi";

const services = [
  {
    icon: <GiToothbrush />,
    title: "Teeth Cleaning",
    description:
      "Professional cleaning to maintain healthy teeth and gums.",
  },
  {
    icon: <FaSmile />,
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with whitening, veneers and smile makeovers.",
  },
  {
    icon: <FaTooth />,
    title: "Dental Implants",
    description:
      "Permanent replacement solutions for missing teeth.",
  },
  {
    icon: <MdHealthAndSafety />,
    title: "Root Canal",
    description:
      "Pain-free root canal treatment using modern techniques.",
  },
  {
    icon: <FaTeeth />,
    title: "Orthodontics",
    description:
      "Braces and aligners to straighten your teeth.",
  },
  {
    icon: <FaChild />,
    title: "Pediatric Care",
    description:
      "Friendly dental care specially designed for children.",
  },
];

const Services = () => {
  return (
    <section
      className="services"
      id="services"
      data-aos="zoom-in"
    >
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>

          <p>
            Complete dental care using advanced technology
            and personalized treatment plans.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;