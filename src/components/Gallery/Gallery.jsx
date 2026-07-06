import "./Gallery.css";

const gallery = [
  "Dental Clinic",
  "Modern Equipment",
  "Happy Patient",
  "Dental Treatment",
  "Reception Area",
  "Consultation Room",
];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">

        <div className="section-title">
          <h2>Our Clinic Gallery</h2>

          <p>
            Take a look at our modern facilities and comfortable treatment
            environment.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div className="gallery-card" key={index}>
              <div className="gallery-image">
                🏥
              </div>

              <h3>{item}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;