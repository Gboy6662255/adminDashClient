import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Organization',
    selector: 'Organization',
    sortable: true
  },
  {
    name: 'Total Users',
    selector: 'Total Users',
    sortable: true
  },
  {
    name: 'Active Users',
    selector: 'Active Users',
    sortable: true
  }
];
 

function DataTVedhikIAS() {
  return (
    <div className='DataTable'>
      <DataTable
        title="VEDHIK IAS Academy"
        columns={columns}
        data = {data}
        pagination
        highlightOnHover
      />
    </div>
  );
}

export default DataTVedhikIAS