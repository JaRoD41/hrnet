import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

export function useSearch() {
  const { employeeList } = useContext(EmployeeContext);

  return { employeeList };
}