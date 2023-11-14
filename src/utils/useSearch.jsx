import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

// I create a custom hook to make a global search in the table
export function useSearch() {
  const { employeeList } = useContext(EmployeeContext);
  return { employeeList };
}
