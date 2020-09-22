import React from 'react';
import './searchfield.css';

const SearchField = (props) =>{
    return(
        <div className="searchField">
            <input type="search" id= "search" placeholder="Search Robbo" onChange={props.onChange} />
            
        </div>
    )
}

export default SearchField;