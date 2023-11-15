import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import SearchInput from '../components/SearchInput/SearchInput';

const EmployeeList = () => {
  return (
    <>
      <Header page="list" />
      <section className="table-header">
        <h2 id="page-role">Current Employees</h2>
      </section>
      <SearchInput />
      <Table />
    </>
  );
};

export default EmployeeList;
