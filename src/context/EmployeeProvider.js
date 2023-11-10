import { EmployeeContext } from './EmployeeContext';
import { useEmployees } from '../utils/customHook';

export const EmployeeProvider = ({ children }) => {
  const { employeeList, addEmployee } = useEmployees();

  return (
    <EmployeeContext.Provider value={{ employees: employeeList, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
