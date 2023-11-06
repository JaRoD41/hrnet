import { useState } from 'react';
import '/node_modules/tabulator-tables/dist/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';
import './Table.css';

const Table = ({ data }) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
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
      // width: 100,
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
      // width: 163,
      responsive: 2,
    },
    {
      title: 'State',
      field: 'state',
      hozAlign: 'center',
      // width: 75,
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
      // width: 200,
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
        data={data}
        columns={columns}
        options={{
          layout: 'fitColumns',
          responsiveLayout: 'collapse',
          pagination: 'local',
          paginationSize: 15,
          paginationCounter: 'rows',
        }}
        // paginationSize={size}
        // paginationSizeSelector={[3, 6, 8, 10]}
        // paginationCounter={'rows'}
        page={page}
        size={size}
        total={data.length}
        onPageChange={handlePageChange}
        onSizeChange={handleSizeChange}
      />
    </>
  );
};

export default Table;

