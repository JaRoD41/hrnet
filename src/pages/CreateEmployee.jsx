import { Link } from 'react-router-dom';
// import { useState } from 'react';
import useModal from '../utils/custom hooks/useModal';
// import {useNavigate} from 'react-router-dom';
import Form from '../components/Form/Form';
import Modal from '../components/Modal/Modal';

const CreateEmployee = () => {
  // const navigate = useNavigate();
  const [isOpen, toggleModal] = useModal();
  
  return (
    <>
      <main aria-labelledby="page-title">
        <h2 tabIndex="0" id="page-title">
          Add an employee
        </h2>
        <Form />
        {/* Modal */}
        <button onClick={toggleModal}>Save</button>
        <Modal isOpen={isOpen} onClose={toggleModal}></Modal>
      </main>
      <div className="link-employee-list">
        <Link to="/employees">-Employees Table-</Link>
      </div>
    </>
  );
};

export default CreateEmployee;
