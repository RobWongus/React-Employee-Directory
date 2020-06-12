import React from 'react';
import Table from 'react-bootstrap/Table'

const EmployeeTable = (props) => {

  return (
      <div>
        <Table className= "tableEmployee" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th onClick={() => props.sortPeople("last")}>Name</th>
              <th onClick={() => props.sortPeople("email")}>Email</th>
              <th>Phone Number</th>
              <th>DOB</th>
            </tr>
          </thead>

          <tbody className="">
            {/*   iterate over array marvel folder passed in from props     */}
            { props.peopleList.map( person => (
              <tr key={person.key}>
                <td>{person.first} {person.last}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.dob}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
  );
    
}
export default EmployeeTable


{/* <tr> 
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
</tr> */}