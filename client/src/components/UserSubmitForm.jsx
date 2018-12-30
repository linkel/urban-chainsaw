import React, { Component } from 'react'

export default class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: undefined,
      color: undefined,
    }
    this.submitForm = this.submitForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async submitForm() {
    const payload = JSON.stringify(this.state)
    const response = await fetch("/submit", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: payload
    })
  }

  handleChange(e) {
    const id = e.target.getAttribute("id")
    const nextState = this.state
    nextState[id] = e.target.value
    this.setState(nextState)
  }

  render() {
    return (
      <div>
        Name: <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
        Age: <input type="number" id="age" value={this.state.age} onChange={this.handleChange}/>
        Favorite Color: <input type="text" id="color" value={this.state.color} onChange={this.handleChange}/>
        <button type="button" onClick={this.submitForm}>Submit</button> 
      </div>
    )
  }
}
