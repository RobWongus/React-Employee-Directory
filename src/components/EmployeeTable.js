import React from 'react';
import Table from 'react-bootstrap/Table'

function EmployeeTable(props) {
    return (
        <div>
           <Table className= "tableEmployee" striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th onClick={props.sortByName}>Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>DOB</th>
    </tr>
  </thead>
  
  <tbody className="">
    
    <tr> 
      <td>Mark Phunky</td>
      <td>Mark@MarkyMark.com</td>
      <td>410-922-8810</td>
      <td>07/26/1968</td>
    </tr>
    <tr>
      <td>James Howlett</td>
      <td>WeaponX@AlphaFlight.com</td>
      <td>416-681-3719</td>
      <td>10/01/1880</td>
    </tr>
  
  </tbody>
</Table>
        </div>
    )
    
}
export default EmployeeTable