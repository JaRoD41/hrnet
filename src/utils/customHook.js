import { useState } from 'react';

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
  const [employeeList, setEmployeeList] = useState(
    JSON.parse(localStorage.getItem('employee') || '[]'),
  );

  const addEmployee = (employee) => {
    const newList = [...employeeList, EmployeeDTO(employee)];
    setEmployeeList(newList);
    localStorage.setItem('employees', JSON.stringify(newList));
  };

  return {
    employeeList,
    addEmployee,
  };
};

const EmployeeForm = () => {
  const { addEmployee } = useEmployees();
  const submit = (e) => {
    e.preventDefault();
    addEmployee({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      dateOfBirth: e.target.dateOfBirth.value,
      street: e.target.street.value,
      city: e.target.city.value,
      zipCode: e.target.zipCode.value,
      state: e.target.state.value,
      startDate: e.target.startDate.value,
      department: e.target.department.value,
    });
  };
  return (
    <>
      <form onSubmit={submit}></form>
    </>
  );
};

const EmployeeList = () => {
  const { employeeList } = useEmployees();
  return (
    <>
      {employeeList.map((employee) => (
        <div>{employee.firstName}</div>
      ))}
    </>
  );
};
