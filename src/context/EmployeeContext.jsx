import { createContext, useState } from 'react';
import mockEmployeeList from '../data/mock';

// I create a context to share employee data between components
export const EmployeeContext = createContext();

// I create a function to convert the employee data to a DTO to be used in the context
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

  // I create a state to store the filtered results
  const [filteredResults, setFilteredResults] = useState([]);

  // I create a function to add an employee to the employee list
  const addEmployee = (employee) => {
    const newList = [...employeeList, EmployeeDTO(employee)];
    setEmployeeList(newList);
  };

  // I create a function to globally filter the employee list based on the search value

  const searchEmployee = (value) => {
    // I set the search value
    setSearchValue(value);

    // I filter the employee list using Object.values to get the values of the employee object
    const filteredList = employeeList.filter((employee) => {
      return Object.values(employee).some((field) =>
        field.toString().toLowerCase().includes(value.toLowerCase()),
      );
    });
    setFilteredResults(filteredList);
    console.log('Résultats filtrés :', filteredList); // Ajoutez cette ligne
  };

  // I create a context value with the employee list, the add employee function, the search employee function, the search value and the filtered results
  const contextValue = {
    employeeList,
    addEmployee,
    searchEmployee,
    searchValue,
    filteredResults,
  };

  // Then, I return the provider with the context value and the children
  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  );
}
