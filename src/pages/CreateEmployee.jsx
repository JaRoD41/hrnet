import { useState } from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Modal from '../components/Modal/Modal';

const CreateEmployee = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <>
      <Header page="create" />
      <main>
        <Form />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </main>
    </>
  );
};

export default CreateEmployee;
