import React from "react";
import "./Input.css";

export const Input = props => (
  <div id="Inputs" className="form-group">
    <input className="form-control" {...props} />
  </div>
);
