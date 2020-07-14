import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
    >
      <img scr="https://randomuser.me/api/portraits/women/12.jpg" alt="https://randomuser.me/api/portraits/women/12.jpg"></img>
      <h1> {props.title} {props.first} {props.last}</h1>
      <h2>{props.phone}</h2>
      <h2>{props.email}</h2>
      <h2>{props.dob}</h2>
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default Card;
