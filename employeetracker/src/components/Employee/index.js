import React from "react";

function Employee(props) {
  return (
    <React.Fragment>
      <td><img src={props.image} alt="this is stupid" /> </td>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </React.Fragment>
  );
}

export default Employee;
