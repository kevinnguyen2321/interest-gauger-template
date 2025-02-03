import './ImageModal.css';

export const ImageModal = ({ imageSrc, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img src={imageSrc} alt="Enlarged view" className="modal-image" />
      </div>
    </div>
  );
};
