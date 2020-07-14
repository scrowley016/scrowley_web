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
    const {sendInfo} = this.props
    const data = this.state
    await sendInfo(data)
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
          <div className="contacttitle">
            <h2>Contact Page</h2>
            <h3> Please fill out the form below</h3>
          </div>
          <div className="containerContact">
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <div className="contactText">
                    <h4>Name:</h4>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <h4>Email:</h4>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <h4>Message:</h4>
                    <input
                      type="message"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <button type="submit" onClick={this.handleSubmit}>
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
