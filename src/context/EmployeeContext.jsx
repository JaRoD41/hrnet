import { createContext, useState } from 'react';
import mockEmployeeList from '../data/mock.js';

// I create a context to share employee data between components
export const EmployeeContext = createContext();

// I create a function to convert the employee data to a DTO (Data Transfer Object) to be used in the context
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

// I create a provider to share employee data between components
export function EmployeeContextProvider({ children }) {
  // I set the initial state of the employee list with the mock data to have some data in the table when the app loads
  const [employeeList, setEmployeeList] = useState(mockEmployeeList);
  // I create a state to store the search value
  const [searchValue, setSearchValue] = useState('');

  // I create a function to add an employee to the employee list
  const addEmployee = (employee) => {
    // I create a new list with the new employee added
    const newList = [...employeeList, EmployeeDTO(employee)];
    setEmployeeList(newList);
  };

  // I create a context value with the employee list, the add employee function, the search value and search value state setter
  const contextValue = {
    employeeList,
    addEmployee,
    searchValue,
    setSearchValue,
  };

  // Then, I return the provider with the context value and the children
  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  );
}
