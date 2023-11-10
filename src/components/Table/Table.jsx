import { useState, useEffect } from 'react';
import '/node_modules/tabulator-tables/dist/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import './Table.css';
import { useEmployees } from '../../utils/customHook';

const Table = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const { employeeList } = useEmployees();
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

  useEffect(() => {
    console.log('employeeList a changé :', employeeList);
  }, [employeeList]);
  return (
    <>
      <ReactTabulator
        data={employeeList}
        columns={columns}
        options={{
          layout: 'fitColumns',
          responsiveLayout: 'collapse',
          pagination: 'local',
          paginationSize: 15,
          paginationCounter: 'rows',
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
