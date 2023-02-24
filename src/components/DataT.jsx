import React from 'react';
import DataTable from 'react-data-table-component';
import "./DataT.css"
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
 

function DataT(props) {
  return (
    <div className='DataTable'>
      <DataTable
        title={props.name}
        columns={columns}
        data = {props.data}
        pagination
        highlightOnHover
      />
    </div>
  );
}

export default DataT