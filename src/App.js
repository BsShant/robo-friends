import React, { Component } from 'react';
import './App.css';

import CardList from './components/cardList/CardList';
import SearchField from './components/search/SearchField';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
      updated: []
      
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      this.setState({
        users: data,
        updated: data
      })
    })
  }
  onChangeHandler =(event) =>{
    console.log(event.target.value)
    const newList = this.state.users.filter(user =>{
       return user.name.toLowerCase().includes(event.target.value.toLowerCase())
     })
     this.setState({
       updated: newList
     })
    
  }

  render(){
    
    return(
      <div>
        
          <SearchField onChange={this.onChangeHandler}/>
          <div className="myApp">
          <CardList list={this.state.updated} />
          </div>

        
      </div>
    )
  }
}

export default App;
