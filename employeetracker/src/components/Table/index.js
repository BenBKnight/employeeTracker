import React from "react";
import "./style.css";
import Employee from "../Employee/index"
function Table({ data }) {

  return (
    <table >
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>

        {data.map(employeeData => (
          <tr key={employeeData.id.value}>
            <Employee
              image={employeeData.picture.large}
              title={employeeData.name.title}
              first={employeeData.name.first}
              last={employeeData.name.last}
              phone={employeeData.phone}
              email={employeeData.email}
              dob={employeeData.dob.date}
            />
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Table;
