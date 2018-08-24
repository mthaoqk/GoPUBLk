import React from "react";

const ListItem = props => (

    <li className='list-group-item' key={props.id}>
        <p><b>Title :</b> {props.title}</p>
        <p><b>Description :</b> {props.description}</p>
        <p><b>Favorite :</b> {props.favorite}</p>
        <p><b>Slug:</b> {props.slug}</p>
      <br/>
      <br/>
      
    </li>
);

export default ListItem;