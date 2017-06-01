import React, { Component } from 'react';
import searchBar from '../containers/searchBar';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render() {
    return (
      <div>
        <searchBar/>
      </div>
    );
  }
}

export default App;
