import { useState } from 'react';
import '/node_modules/tabulator-tables/dist/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';

const Table = ({ data }) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
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
      hozAlign: 'left',
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
      hozAlign: 'center',
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
          pagination: 'local',
          paginationSize: 6,
          paginationSizeSelector: [3, 6, 8, 10],
          movableColumns: true,
          paginationCounter: 'rows',
        }}
        paginationSize={size}
        paginationSizeSelector={[3, 6, 8, 10]}
        paginationCounter={'rows'}
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

// paginationSize:6
// paginationSizeSelector:[3, 6, 8, 10]
// paginationCounter={'rows'}
// page={page}
// size={size}
// total={data.length}
// onPageChange={handlePageChange}
// onSizeChange={handleSizeChange}