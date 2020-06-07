import React from 'react';
import Table from 'react-bootstrap/Table'

function EmployeeTable(props) {
//   const { products } = props;
    return (
        <div>
           <Table className= "tableEmployee" striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>DOB</th>
    </tr>
  </thead>
  
  <tbody className="">
    {/* {products.map(product =>( */}
    <div>
    <tr> 
      {/* key={product.id}> */}
      <td>Mark Bunch</td>
      <td>mark@markymark.com</td>
      <td>617-922-8810</td>
      <td>07/26/1968</td>
    </tr>
    <tr>
      <td>James Howlett</td>
      <td>weaponx@alphaflight.com</td>
      <td>416-681-3719</td>
      <td>10/01/1880</td>
    </tr>
    <tr>
      <td>Nathan Summers</td>
      <td>bodyslidetohq@xforce.com</td>
      <td>813-735-9173</td>
      <td>01/18/2045</td>
    </tr>
    <tr>
      <td>Piotr Rasputin</td>
      <td>insovietrussia@yakov.com</td>
      <td>7-940-318-65-48</td>
      <td>05/01/1975</td>
    </tr>
    
    </div>
  </tbody>
</Table>
        </div>
    );
    
}
export default EmployeeTable