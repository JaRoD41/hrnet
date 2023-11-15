import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div id="modal" className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-content">
          {/* <!--Content--> */}
          <div className="content">New Employee Successfuly Created !</div>
          {/* <!--Footer--> */}
          <div className="footer">
            <button onClick={onClose} className="close-button">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
