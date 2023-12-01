import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

// I create a custom hook to get the employee list, the add employee function, the search value and the search value state setter
export function useEmployees() {
  const { employeeList, addEmployee, searchValue, setSearchValue } =
    useContext(EmployeeContext);

  return { employeeList, addEmployee, searchValue, setSearchValue };
}
