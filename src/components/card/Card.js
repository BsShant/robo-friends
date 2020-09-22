import React from 'react';
import './card.css';

const Card = (props) =>{

    return(
            <div className="card">
            <img src={`https://robohash.org/${props.list.id}?set=set3?size=180*180`} alt="robbo"/>
            <div className="card-name">
            <h1 key= {props.list.key}>{props.list.name}</h1>
            <h3>{props.list.email}</h3>
            </div>
           
        </div>

        
        
    )
}

export default Card;