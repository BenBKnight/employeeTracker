import React from "react";
import "./style.css";
import Employee from "../Employee/index"
import Moment from "moment"
function Table({ data, search, sortByName }) {
  let employeeData = data.filter(
    (employee) => {
      let fullName = employee.name.first + employee.name.last
      return fullName.toLowerCase().indexOf(search) !== -1;
    }
  )
  return (
    <table >
      <thead>
        <tr>
          <th>Image</th>
          <th>First
            <button type="submit" onClick={sortByName} className="btn btn-success">
              Sort
            </button>
          </th>
          <th>Last</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Date of Birth</th>
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
