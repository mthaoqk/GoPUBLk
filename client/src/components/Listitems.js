import React from "react";
import Discover from "../pages/Discover/discover";

const ListItem = props => (

   <li className='list-group-item' key={props.id}>
       <p><b>Title :</b> {props.title}</p>
       <p><b>Description :</b> {props.description}</p>
       <p><b>Summary :</b> {props.body}</p>
       <p><b>Goal :</b> {props.financing}</p>
       <p><b>Id :</b> {props.id}</p>
     <br/>
     <br/>
     <button className="btn btn-primary" id={props.id} onClick={()=>props.handleProjectInfo(props.id)}> more info </button>
   </li>
);

export default ListItem;