import "./Gallery.css";

import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">

        <div className="section-title">
          <h2>Our Clinic Gallery</h2>

          <p>
            Take a look at our modern facilities and
            comfortable treatment environment.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;