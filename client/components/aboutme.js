import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="stars">
          <div className="twinkling">
            <div className="clouds">
              <div className="abouttitle">About Shannon</div>
              <div className="about">
                <div className="aboutPhoto">
                  <img src="headshot.png" height="500em" width="325em" />
                </div>
                <div className="aboutbody">
                  <p>
                    After working in the IT industry as an experienced
                    technician, I have moved from fixing computer programs, to
                    writing them myself. I have created projects in various
                    languages such as Javascript, Python, C#, and Scala.
                  </p>
                  <p>
                    I attended the Grace Hopper Program, an all female cohort
                    part of FullStack Academy of Code, in Spring 2020. After
                    completeing the course, I have created several projects
                    using the NERD stack, including this website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
