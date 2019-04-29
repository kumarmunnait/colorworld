import React, { Component } from 'react';
import Master from './components/master';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
    // IF YOU ARE NOT USING THE REACT FRAGMENT THE YOU NEED TO USE PAIR TAG OF DIV 
        <React.Fragment> 
             <Master/>
     </React.Fragment>
    );
  }
}

export default App;
