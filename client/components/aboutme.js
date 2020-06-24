import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <h2>
          My Name is Shannon Crowley, and I am a Full Stack Software Developer
        </h2>
        <h4>
          After working in the IT industry as an experienced technician, I moved
          from fixing computer programs to writing them myself. I have created
          projects in various languages such as Javascript, Python, C#, and
          Scala.
        </h4>
        <h4>
          I attended the Grace Hopper Program, an all female cohort part of
          FullStack Academy of Code, in Spring 2020. After completeing the
          course, I have created several projects using the NERD stack,
          including this website.
        </h4>
      </div>
    )
  }
}
