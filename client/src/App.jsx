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
    Object.assign(this.state, obj);
  }
  
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
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
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
    .then((userData) => this.setState({userdata: userData}))
    .catch(err => console.log(err));
  }

  componentDidUpdate() {
    // Call our fetch function below once the component mounts
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