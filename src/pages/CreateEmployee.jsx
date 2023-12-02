import { useState } from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Modal from '../components/Modal/Modal';

const CreateEmployee = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = () => {
    setIsOpen(true);
  };

  return (
    <div className="create-employee">
      {/* I blur the background when the modal is open */}
      <div className={`background ${isOpen ? 'blur' : ''}`}>
        <Header page="create" />
        <main>
          <Form onSubmit={handleFormSubmit} />
        </main>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="content">New Employee Successfuly Created !</div>
      </Modal>
    </div>
  );
};

export default CreateEmployee;
