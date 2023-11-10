// const EmployeeForm = () => {
//   const { addEmployee } = useEmployees();
//   const submit = (e) => {
//     e.preventDefault();
//     addEmployee({
//       firstName: e.target.firstName.value,
//       lastName: e.target.lastName.value,
//       dateOfBirth: e.target.dateOfBirth.value,
//       street: e.target.street.value,
//       city: e.target.city.value,
//       zipCode: e.target.zipCode.value,
//       state: e.target.state.value,
//       startDate: e.target.startDate.value,
//       department: e.target.department.value,
//     });
//   };
//   return (
//     <>
//       <form onSubmit={submit}></form>
//     </>
//   );
// };

// const EmployeeList = () => {
//   const { employeeList } = useEmployees();
//   return (
//     <>
//       {employeeList.map((employee) => (
//         <div>{employee.firstName}</div>
//       ))}
//     </>
//   );
// };

// // ----------------------------------------------------------------

// import { useContext } from 'react';
// import { EmployeeContext } from './EmployeeContext';

// export function useEmployees() {
//   const context = useContext(EmployeeContext);

//   if (!context) {
//     throw new Error('useEmployees must be used within an EmployeeProvider');
//   }

//   return context;
// }

// // Puis, dans le composant :

// import React from 'react';
// import { useEmployees } from './useEmployees';

// export function EmployeeForm() {
//   const { addEmployee } = useEmployees();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newEmployee = {
//       /* vos données de formulaire ici */
//     };
//     addEmployee(newEmployee);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* vos champs de formulaire ici */}
//       <button type="submit">Save</button>
//     </form>
//   );
// }

// // Et dans le tableau d'employés :

// import React from 'react';
// import { useEmployees } from './useEmployees';

// export function EmployeeTable() {
//   const { employees } = useEmployees();

//   return (
//     <table>
//       {/* vos en-têtes de tableau ici */}
//       <tbody>
//         {employees.map((employee, index) => (
//           <tr key={index}>{/* vos données d'employé ici */}</tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
