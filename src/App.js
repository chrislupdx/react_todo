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

twowaybindHandler = (event) => {
  this.setState({
  name: event.target.value
  })
}
  render() {
    return (
      <div className="App">
        <UserOutput name = "{props.name}" />
        <UserOutput name = {this.state.name} />
        <UserOutput />
        <UserInput
          currentName = {this.state.name}
          changed={this.twowaybindHandler}/>
        <button onClick={this.eventHandler.bind(this, "this.eventHandler.bind(this, 2ndarg)") }> NOPE </button>
      </div>
    );
  }
}

export default App;
