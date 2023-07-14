import React, { Component } from 'react'
import './SeparateHandlesForm.css'

export class CleanForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      dob: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Congratulations on signing up! Here are your credentials:\n\nFirst Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nD.O.B: ${this.state.dob}\nEmail: ${this.state.email}`)
    this.setState(({
      firstName: "",
      lastName: "",
      dob: "",
      email: ""
    }))
  }

  handleChange(event) {
    this.setState(({
      [event.target.name]: event.target.value
    }))
  }

  render() {
    return (
      <div>
        <form action="submit">

          {/* first name */}
          <div>
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              for="firstName"
              name="firstName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>

          {/* last name */}
          <div>
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              for="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>

          {/* D.O.B */}
          <div>
            <label htmlFor="dob">D.O.B :</label>
            <input
              type="date"
              for="dob"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
          </div>

          {/* email */}
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              for="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <button
            onClick={this.handleSubmit}
          >Submit</button>

        </form>

        <h3>Hi there, {this.state.firstName} {this.state.lastName}! We have your date of birth on record as {this.state.dob}, and your email saved as {this.state.email}</h3>

      </div>
    )
  }
}
