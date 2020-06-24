import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <a href="scres.pdf" download="Shannon_Crowley_Resume">
          <button type="button">Download</button>
        </a>
      </div>
    )
  }
}
