import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Resume extends Component {
  render() {
    return (
      <div className="container">
        <div className="pdf">
          <embed src="scres.pdf" />
        </div>
      </div>
    )
  }
}
