import './Modal.css'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div id="modal" className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-content">
          {/* <!--Header--> */}
          <div className="modal-header">Header</div>
          {/* <!--Content--> */}
          <div className="modal-body">New Employee Successfuly Created !</div>
          {/* <!--Footer--> */}
          <div className="modal-footer">
            <button
              onClick={onClose}
              className="modal-close-button"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
