import React from "react";

const ListItem = props => (

    <li className='list-group-item' key={props.id}>
        <p><b>Title :</b> {props.title}</p>
        <p><b>Description :</b> {props.description}</p>
        <p><b>Favorite :</b> {props.favorite}</p>
        <p><b>Slug:</b> {props.slug}</p>
        <p><b>key:</b> {props.key}</p>
        <p>id: {props.id}</p>
      <br/>
      <br/>
      <button className="btn btn-primary" id={props.id} onClick={()=>props.handleProjectInfo(props.id)}> more info </button>
    </li>
);

export default ListItem;