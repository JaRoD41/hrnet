// import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import mockEmployeeList from '../data/mock';

const EmployeeList = () => {
  // const navigate = useNavigate();

  // const employeeData = mockEmployeeList;

  return (
    <>
      <Header page='list'/>
      {/* <h1>EmployeeList</h1>
      <button onClick={() => navigate('/')}>Create Employee</button> */}

      <Table data={mockEmployeeList} />
      
    </>
  );
};

export default EmployeeList;
