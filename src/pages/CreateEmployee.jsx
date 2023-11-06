// import { Link } from 'react-router-dom';
import { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Modal from '../components/Modal/Modal';

const CreateEmployee = () => {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header page='create'/>
      <main>
        <Form />
        {/* Modal */}
        {/* <button onClick={toggleModal}>Save</button> */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </main>
      {/* <div className="link-employee-list">
        <Link to="/employees">-Employees Table-</Link>
      </div> */}
    </>
  );
};

export default CreateEmployee;
