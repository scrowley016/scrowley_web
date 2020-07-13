import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProjects} from '../store/project'
import {Link} from 'react-router-dom'

export class Projects extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchProjects()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Projects Page</h2>
        <div className="allPro">
          {this.props.project &&
            this.props.project.map(pro => (
              <div key={pro.id} className="allprojectSingle">
                <Link to={`/projects/${pro.id}`} className="proLink">
                  <div>
                    <img className="proImage" src={pro.image} />
                  </div>

                  <div className="proTitle">{pro.title}</div>

                  <div className="proShort">{pro.shortDescription}</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    project: state.project.project
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  }
}

export default connect(mapState, mapDispatch)(Projects)
