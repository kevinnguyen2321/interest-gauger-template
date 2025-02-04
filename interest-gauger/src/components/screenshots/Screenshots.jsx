import ScreenShotOne from '../../assets/screenshot-one.png';
import ScreenShotTwo from '../../assets/screenshot-two.png';
import ScreenShotThree from '../../assets/screenshot-three.png';
import './Screenshots.css';
import { ImageModal } from './ImageModal';
import { useState } from 'react';

export const Screenshots = () => {
  const [modalImage, setModalImage] = useState(null);

  // Array of screenshot images
  const screenshots = [ScreenShotOne, ScreenShotTwo, ScreenShotThree];

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
        <div className="carousel-container">
          {screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              className="carousel-image"
              onClick={() => openModal(screenshot)}
            />
          ))}
        </div>
      </div>
      {modalImage && <ImageModal imageSrc={modalImage} onClose={closeModal} />}
    </>
  );
};
