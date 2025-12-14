'use client';

import { useState } from 'react';
import "./gallery.css";

export default function GalleryClient({ imagens }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="galleryContainer">
      <h1 className="galleryTitle">Galeria</h1>

      <div className="galleryGrid">
        {imagens.map((item) => (
          <div
            key={item.id}
            className="galleryCard"
            onClick={() => openModal(item)}
            // Adicionando um cursor para indicar que é clicável
            style={{ cursor: 'pointer' }}
          >
            <img
              src={item.image}
              alt={item.description}
              className="galleryImage"
            />
            <p className="galleryDescription">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal de Zoom */}
      {modalOpen && selectedImage && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="modalCloseButton" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.description}
              className="modalImage"
            />
            <p className="modalDescription">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
