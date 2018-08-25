import React from "react";
import "./FormBtn.css";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} id="buttonForm" className="btn btn-primary">
    {props.children}
  </button>
);
