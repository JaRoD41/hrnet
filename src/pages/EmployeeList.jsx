import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import { useEmployees } from '../utils/customHook';

const EmployeeList = () => {
  const { employeeList } = useEmployees();
  console.log('employeeList dans la page du tableau :', employeeList);
  return (
    <>
      <Header page="list" />
      <section className="table-header">
        <h2 id="page-role">Actual Employee List</h2>
      </section>

      {/* <Table data={employeeList} /> */}
      <Table />
    </>
  );
};

export default EmployeeList;
