import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Gallery.css";

const images = [
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img6.webp",
  "img7.webp",
  "img8.webp",
  "img9.webp",
  "img10.webp",
  "img11.webp",
  "img12.webp",
  "img13.webp",
  "img14.webp",
  "img15.webp",
  "img16.webp",
  "img17.webp",
  "img18.webp",
  "img19.webp",
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
      <Link to="/" role="link" className="back-button">
        Voltar
      </Link>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image} className="image-card" onClick={() => openModal(image)}>
            <img
              role="img"
              width="300"
              height="300"
              loading="lazy"
              src={`/webp/${image}`}
              alt={`Imagem de Portfólio: ${image}`}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button role="button" className="close-button" onClick={closeModal} aria-label="Fechar imagem">
              &times;
            </button>
            <img
              role="img"
              width="600"
              height="600"
              src={`/webp/${selectedImage}`}
              alt={`Imagem de Portfólio: ${selectedImage}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
