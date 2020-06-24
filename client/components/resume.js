import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Resume extends Component {
  render() {
    return (
      <div className="container">
        <div className="center">
          <embed src="scres.pdf" width="500" height="600" />
        </div>
      </div>
    )
  }
}
