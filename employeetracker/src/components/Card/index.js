import React from "react";
import "./style.css";
import Alert from "../Alert/index"
function Card({ data }) {

  return (
    <table >
      <thead>
        <tr>
          <th>image</th>
          <th>name</th>
          <th>phone</th>
          <th>email</th>
          <th>dob</th>
        </tr>
      </thead>
      <tbody>

        {data.map(employeeData => (
          <tr key={employeeData.id.value}>
            <Alert
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

export default Card;
