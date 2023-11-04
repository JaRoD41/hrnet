import { useNavigate, Link } from 'react-router-dom';
// import { ReactTabulator, Pagination } from 'react-tabulator';
// import { PageModule } from 'react-tabulator';
// import '/node_modules/tabulator-tables/dist/css/tabulator.min.css';
import Table from '../components/Table/Table';
import mockEmployeeList from '../data/mock';

const EmployeeList = () => {
  const navigate = useNavigate();

  // const employeeData = mockEmployeeList;

  return (
    <>
      <h1>EmployeeList</h1>
      <button onClick={() => navigate('/')}>Create Employee</button>

      <Table data={mockEmployeeList} />
      <div className="link-create-employee">
        <Link to="/">-Employee registration form-</Link>
      </div>
    </>
  );
};

export default EmployeeList;
