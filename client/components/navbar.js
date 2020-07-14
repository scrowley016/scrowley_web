import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="wholeNav">
    {/* <div className="starsnav">
      <div className="twinklingnav"> */}
    {/* <div className="cloudsnav"> */}
    <div className="navtop">
      <img className="navlogo" src="logo.png" />
      <div>
        <div className="navtitle">Shannon Crowley</div>
        <div className="navtitleTwo">Full Stack Software Developer</div>
      </div>
    </div>
    <nav id="navbar">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}

          <Link className="link" to="aboutme">
            About Me
          </Link>
          <Link className="link" to="projects">
            Projects
          </Link>
          <Link className="link" to="contact">
            Contact
          </Link>
          <Link className="link" to="resume">
            Resume
          </Link>
        </div>
      )}
    </nav>
    {/* </div>
    </div> */}
    {/* </div> */}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
