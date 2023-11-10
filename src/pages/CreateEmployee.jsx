// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
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
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </main>
      
    </>
  );
};

export default CreateEmployee;


// import React from 'react';
// import { EmployeeContext } from '../context/EmployeeContext';

// export const EmployeeProvider = ({ children }) => {
//   // Définissez les valeurs que vous souhaitez fournir dans le contexte
//   // et placez-les dans un objet
//   const contextValues = {
//     // Définissez les valeurs ici
//   };

//   return (
//     <EmployeeContext.Provider value={contextValues}>
//       {children}
//     </EmployeeContext.Provider>
//   );
// };