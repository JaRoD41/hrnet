// import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import mockEmployeeList from '../data/mock';

const EmployeeList = () => {
  // const navigate = useNavigate();

  // const employeeData = mockEmployeeList;

  return (
    <>
      <Header page="list" />
      <section className="table-header">
        <h2 id="page-role">Actual Employee List</h2>
      </section>

      <Table data={mockEmployeeList} />
    </>
  );
};

export default EmployeeList;
