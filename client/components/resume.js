import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div className="pdf">
          <embed src="scres.pdf" height="1000em" width="100%" />
        </div>
      </div>
    )
  }
}
