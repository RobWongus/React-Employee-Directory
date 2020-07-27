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
            {/*   iterate over array marvel folder passed in from props. try putting last name on a different line    */}
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


