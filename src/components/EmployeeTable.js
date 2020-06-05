import React from 'react';
import Table from 'react-bootstrap/Table'

export default function EmployeeTable(props) {
    return (
        <div>
           <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Hero</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Mark@MarkyMark.com</td>
      <td>Punisher</td>
    </tr>
    <tr>
      <td>James</td>
      <td>Wolverine@Marvel.com</td>
      <td>Weapon-X</td>
    </tr>
    
  </tbody>
</Table>
        </div>
    )


}