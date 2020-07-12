import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.message]: event.target.value
    })
  }
  handleSubmit = async event => {
    event.preventDefault()
    const {addFood} = this.props
    const food = this.state
    await addFood(food)
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {
    return (
      <div className="stars">
        <div className="twinkling">
          <div className="container">
            <div className="contacttitle">
              <h2>Contact Page</h2>
              <h3> Please fill out the form below to contact Shannon</h3>
            </div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <div className="contactText">
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    Message:
                    <input
                      type="text"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <button type="button">send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
