import React, { Component } from 'react';
import UserSubmitFrom from './components/UserSubmitForm.jsx'
import RenderUserData from './components/RenderUserData.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { userdata: undefined}
    this.callBackendAPI = this.callBackendAPI.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  updateState(obj) {
    const newState = Object.assign(this.state, obj);
    this.setState(newState)
  }
  
  callBackendAPI = async () => {
    try {
      const response = await fetch('/getuserdata');
      const body = await response.json();
      return body
    }
    catch(e) {
      console.log(e)
    }
  }

  componentDidMount() {
    this.callBackendAPI()
    .then((userData) => this.setState({userdata: userData}))
    .catch(err => console.log(err));
  }

  componentDidUpdate() {
    this.callBackendAPI()
    .then((userData) => this.setState({userdata: userData}))
    .catch(err => console.log(err));
  }

  render() {
    let crUserdata;

    if (this.state.userdata) {
      crUserdata = <RenderUserData userdata={this.state.userdata}/>
    }

    return (
      <div className="App">
        <UserSubmitFrom callBackend={this.callBackendAPI}/>
        {crUserdata}
      </div>
    );
  }
}

export default App;