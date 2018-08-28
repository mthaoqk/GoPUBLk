import React from "react";

export const ResultsList = props => (
  <li className="list-group-item">
   <p><b>Title :</b> {props.title}</p>
   <p><b>Decription :</b> {props.decription}</p>
  </li>
);

export default ResultsList;