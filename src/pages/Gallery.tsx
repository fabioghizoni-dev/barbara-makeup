import { useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "img1.JPG",
  "img2.JPG",
  "img3.JPG",
  "img4.JPG",
  "img5.JPG",
  "img6.JPG",
  "img7.JPG",
  "img8.JPG",
  "img9.JPG",
  "img10.JPG",
  "img11.JPG",
  "img12.JPG",
  "img13.JPG",
  "img14.JPG",
  "img15.JPG",
  "img16.JPG",
  "img17.JPG",
  "img18.JPG",
  "img19.JPG",
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <Link to="/" className="back-button">
        Voltar
      </Link>
      <div className="image-grid">
        {images.map((image) => (
          <div
            key={image}
            className="image-card"
            onClick={() => openModal(image)}
          >
            <img
              src={new URL(`../assets/${image}`, import.meta.url).href}
              alt={`Imagem de Portfólio: ${image}`}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={new URL(`../assets/${selectedImage}`, import.meta.url).href}
              alt={`Imagem de Portfólio: ${selectedImage}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;