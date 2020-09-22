import React from 'react';
import './cardList.css';
import Card from '../card/Card';

const CardList = (props) =>{

    return(
        <div className="list">
            {
              
              props.list.map(user => {
              return <Card list={user}/>  
              })
            }
        </div>
        

        
        
    )
}

export default CardList;