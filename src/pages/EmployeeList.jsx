// import { useContext } from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
// import { useEmployees } from '../utils/useEmployees';
// import { EmployeeContext } from '../context/EmployeeContext';
// import { ThemeContext, ThemeContextProvider } from '../utils/useTheme';

const EmployeeList = () => {

  return (
    <>
      <Header page="list" />
      <section className="table-header">
        <h2 id="page-role">Current Employees</h2>
      </section>
      <Table />
    </>
  );
};

export default EmployeeList;
