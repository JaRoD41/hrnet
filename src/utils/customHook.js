import { useState } from 'react';
import mockEmployeeList from '../data/mock';

const EmployeeDTO = (data) => {
  return {
    firstName: data.firstName,
    lastName: data.lastName,
    dateOfBirth: data.dateOfBirth,
    street: data.street,
    city: data.city,
    zipCode: data.zipCode,
    state: data.state,
    startDate: data.startDate,
    department: data.department,
  };
};

export const useEmployees = () => {
  const [employeeList, setEmployeeList] = useState([...mockEmployeeList]);

  const addEmployee = (employee) => {
    const newList = [...employeeList, EmployeeDTO(employee)];
    setEmployeeList(newList);

    // I want to test if the new employee is added
    console.log(
      `Employé ${employee.firstName} ${employee.lastName} ajouté avec succès.`,
    );
    console.log('nouvelle liste :', newList);
  };

  // const resetEmployees = () => {
  //   setEmployeeList([...mockEmployeeList]);
  // };

  return {
    employeeList,
    addEmployee,
    // resetEmployees,
  };
};
