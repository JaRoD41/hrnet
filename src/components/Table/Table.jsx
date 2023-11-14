import { useState, useEffect } from 'react';
import '/node_modules/tabulator-tables/dist/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import './Table.css';
import { useEmployees } from '../../utils/useEmployees';

const Table = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  // const { employeeList, filteredResults } = useEmployees();

  ///////////////////////////////////////

  const { employeeList, searchValue } = useEmployees();

  // I create a state to store the filtered results
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const filteredList = employeeList.filter((employee) => {
      return Object.values(employee).some((field) =>
        field.toString().toLowerCase().includes(searchValue.toLowerCase()),
      );
    });
    setFilteredResults(filteredList);
  }, [employeeList, searchValue]);

  /////////////////////////////////////////

  // I attribute the employee list to the table or the filtered results based on the search
  const employeesToDisplay =
    filteredResults && filteredResults.length > 0
      ? filteredResults
      : employeeList;

  // I create the columns for the table
  const columns = [
    {
      formatter: 'responsiveCollapse',
      width: 30,
      minWidth: 30,
      hozAlign: 'center',
      resizable: false,
      headerSort: false,
    },
    {
      title: 'First Name',
      field: 'firstName',
      hozAlign: 'left',
      width: 100,
      responsive: 0,
    },
    {
      title: 'Last Name',
      field: 'lastName',
      hozAlign: 'left',
      width: 100,
      responsive: 0,
    },
    {
      title: 'Birth Date',
      field: 'dateOfBirth',
      hozAlign: 'center',
      responsive: 2,
    },
    {
      title: 'Street',
      field: 'street',
      hozAlign: 'left',
      width: 275,
      responsive: 2,
    },
    {
      title: 'City',
      field: 'city',
      hozAlign: 'center',
      responsive: 2,
    },
    {
      title: 'State',
      field: 'state',
      hozAlign: 'center',
      responsive: 2,
    },
    {
      title: 'Zip Code',
      field: 'zipCode',
      hozAlign: 'center',
      width: 75,
      responsive: 2,
    },
    {
      title: 'Start Date',
      field: 'startDate',
      hozAlign: 'center',
      width: 125,
      responsive: 2,
    },
    {
      title: 'Department',
      field: 'department',
      hozAlign: 'center',
      responsive: 2,
    },
  ];

  const handlePageChange = (e, page) => {
    setPage(page);
  };

  const handleSizeChange = (e, size) => {
    setSize(size);
  };

  return (
    <>
      <ReactTabulator
        key={Date.now()}
        data={employeesToDisplay}
        columns={columns}
        options={{
          layout: 'fitColumns',
          responsiveLayout: 'collapse',
          pagination: 'local',
          paginationSize: 10,
          paginationSizeSelector: [10, 25, 50, 100],
          paginationCounter: 'rows',
          langs: {
            default: {
              pagination: {
                counter: {
                  showing: 'Showing',
                  of: 'of',
                  rows: 'entries',
                  pages: 'pages',
                },
              },
            },
          },
        }}
        page={page}
        size={size}
        total={employeeList.length}
        onPageChange={handlePageChange}
        onSizeChange={handleSizeChange}
      />
    </>
  );
};

export default Table;
