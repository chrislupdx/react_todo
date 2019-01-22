import React, { Component } from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

class App extends Component {
  state = {name: "this.state.name",}

eventHandler = (varName) => {
  // console.log("changed")
  this.setState({ name: varName  });
}

  render() {
    return (
      <div className="App">
        <UserOutput name = "{props.name}" />
        <UserOutput name = {this.state.name} />
        <UserOutput />
        <UserInput
          onChange = {this.eventHandler}
          click = {this.eventHandler}   />
        <button onClick={this.eventHandler.bind(this, "this.eventHandler.bind(this, 2ndarg)") }> NOPE </button>
      </div>
    );
  }
}

export default App;
