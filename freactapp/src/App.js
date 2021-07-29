import React, {Component} from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
import AddUser from './components/AddUser';


import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <AddUser />
        <User />
      </div>
    );
  }
  

}

export default App;
 