import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
   <p><b>Title :</b> {props.title}</p>
   <p><b>Summary :</b> {props.body}</p>
  </li>
);

export default ListItem;
