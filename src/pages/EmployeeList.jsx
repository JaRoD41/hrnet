import { useNavigate, Link } from 'react-router-dom';
import { ReactTabulator } from 'react-tabulator';
import '/node_modules/tabulator-tables/dist/css/tabulator.min.css';



const EmployeeList = () => {
  const navigate = useNavigate();
  const columns = [
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
    { title: 'Favourite Color', field: 'col' },
    { title: 'Date Of Birth', field: 'dob', hozAlign: 'center' },
    { title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star' },
    {
      title: 'Passed?',
      field: 'passed',
      hozAlign: 'center',
      formatter: 'tickCross',
    },
  ];

  var data = [
    { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
    { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' },
    {
      id: 3,
      name: 'Christine Lobowski',
      age: '42',
      col: 'green',
      dob: '22/05/1982',
    },
    {
      id: 4,
      name: 'Brendon Philips',
      age: '125',
      col: 'orange',
      dob: '01/08/1980',
    },
    {
      id: 5,
      name: 'Margret Marmajuke',
      age: '16',
      col: 'yellow',
      dob: '31/01/1999',
    },
  ];


  return (
    <>
      <h1>EmployeeList</h1>
      <button onClick={() => navigate('/')}>Create Employee</button>

      <ReactTabulator data={data} columns={columns} layout={'fitData'} />
      <div className="link-create-employee">
        <Link to="/">-Employee registration form-</Link>
      </div>
    </>
  );
};

export default EmployeeList;
