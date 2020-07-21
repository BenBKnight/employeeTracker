import React from "react";
import "./style.css";
import Employee from "../Employee/index"
import Moment from "moment"
function Table({ data, search, sortByName }) {
  let employeeData = data.filter(
    (employee) => {
      let fullName = employee.name.first + employee.name.last;
      let searchedName = search.toString().toLowerCase();
      return fullName.toLowerCase().indexOf(searchedName) !== -1;
    }
  )
  return (
    <table className="table" >
      <thead className="thead-dark">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First
            <button type="submit" onClick={sortByName} className="btn btn-position">
              Sort
            </button>
          </th>
          <th scope="col">Last</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {employeeData.map(employee => (
          <tr key={employee.id.value}>
            <Employee
              image={employee.picture.large}
              title={employee.name.title}
              first={employee.name.first}
              last={employee.name.last}
              phone={employee.phone}
              email={employee.email}
              dob={Moment(employee.dob.date).format("MMM Do")}
            />
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Table;
