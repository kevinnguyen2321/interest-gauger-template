import ScreenShotOne from '../../assets/screenshot-one.png';
import ScreenShotTwo from '../../assets/screenshot-two.png';
import ScreenShotThree from '../../assets/screenshot-three.png';
import './Screenshots.css';
import { ImageModal } from './ImageModal';
import { useState } from 'react';

export const Screenshots = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className="carousel">
        <h3 className="carousel-title">App Screenshots</h3>
        <div className="carousel-track">
          <img
            src={ScreenShotOne}
            alt="screenshot1"
            className="carousel-img"
            onClick={() => openModal(ScreenShotOne)}
          />
          <img
            src={ScreenShotTwo}
            alt="screenshot2"
            className="carousel-img"
            onClick={() => openModal(ScreenShotTwo)}
          />
          <img
            src={ScreenShotThree}
            alt="screenshot3"
            className="carousel-img"
            onClick={() => openModal(ScreenShotThree)}
          />
          {/* Duplicate images for infinite looping */}
          <img
            src={ScreenShotOne}
            alt="screenshot1 duplicate"
            className="carousel-img"
            onClick={() => openModal(ScreenShotOne)}
          />
          <img
            src={ScreenShotTwo}
            alt="screenshot2 duplicate"
            className="carousel-img"
            onClick={() => openModal(ScreenShotTwo)}
          />
          <img
            src={ScreenShotThree}
            alt="screenshot3 duplicate"
            className="carousel-img"
            onClick={() => openModal(ScreenShotThree)}
          />
        </div>
      </div>
      <div>
        {modalImage && (
          <ImageModal imageSrc={modalImage} onClose={closeModal} />
        )}
      </div>
    </>
  );
};
