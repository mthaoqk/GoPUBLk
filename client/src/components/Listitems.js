import React from "react";
import "./ListItems.css";

const ListItem = props => (

   <li className='list-group-item' key={props.id}>
       <p><b>Title :</b> {props.title}</p>
       <p><b>Description :</b> {props.description}</p>
       <p><b>Summary :</b> {props.body}</p>
       <p><b>Finance :</b> {props.financing}</p>
       <p><b>Id :</b> {props.id}</p>
     <button className="btn btn-primary" id={props.id} onClick={()=>props.handleProjectInfo(props.id)}> More info </button>
   </li>

);

export default ListItem;