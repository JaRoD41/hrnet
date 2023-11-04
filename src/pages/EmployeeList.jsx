import { useNavigate, Link } from 'react-router-dom';
import { ReactTabulator } from 'react-tabulator';
import '/node_modules/tabulator-tables/dist/css/tabulator.min.css';
import mockEmployeeList from '../data/mock';

const EmployeeList = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'First Name',
      field: 'firstName',
      hozAlign: 'left',
      // width: 150,
      responsive: 0,
    },
    {
      title: 'Last Name',
      field: 'lastName',
      hozAlign: 'left',
      // width: 150,
      responsive: 0,
    },
    {
      title: 'Birth Date',
      field: 'dateOfBirth',
      hozAlign: 'center',
      // width: 150,
    },
    {
      title: 'Street',
      field: 'street',
      hozAlign: 'center',
      // width: 150,
      responsive: 2,
    },
    {
      title: 'City',
      field: 'city',
      hozAlign: 'center',
      // width: 150,
      responsive: 0,
    },
    {
      title: 'State',
      field: 'state',
      hozAlign: 'left',
      // width: 150,
      responsive: 2,
    },
    {
      title: 'Zip Code',
      field: 'zipCode',
      hozAlign: 'center',
      // width: 150,
      responsive: 2,
    },
    {
      title: 'Start Date',
      field: 'startDate',
      hozAlign: 'center',
      // width: 150,
      responsive: 1,
    },
    {
      title: 'Department',
      field: 'department',
      hozAlign: 'center',
      // width: 150,
      responsive: 0,
    },
  ];

  const employeeData = mockEmployeeList;

  return (
    <>
      <h1>EmployeeList</h1>
      <button onClick={() => navigate('/')}>Create Employee</button>

      <ReactTabulator
        data={employeeData}
        columns={columns}
        layout={'fitColumns'}
        layoutColumnsOnNewData={true}
        responsiveLayout={'hide'}
      />
      <div className="link-create-employee">
        <Link to="/">-Employee registration form-</Link>
      </div>
    </>
  );
};

export default EmployeeList;
