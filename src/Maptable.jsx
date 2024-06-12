import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function MapTable() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: 'Item 1',
      description: 'Description for Item 1',
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description for Item 2',
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description for Item 3',
    },
 
  ]);

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
         
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.description}</td>
           
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MapTable;
