import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

// I create a custom hook to get the employee list and the add employee function
export function useEmployees() {
  const { employeeList, addEmployee } = useContext(EmployeeContext);

  return { employeeList, addEmployee };
}


