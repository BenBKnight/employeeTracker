import React from "react";

function Alert(props) {
  return (
    <React.Fragment>
      <td><img src={props.image} alt="this is stupid" /> </td>
      <td>{props.title} {props.first} {props.last}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </React.Fragment>
  );
}

export default Alert;
