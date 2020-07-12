import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProjects} from '../store/project'

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
        {this.props.project &&
          this.props.project.map(pro => (
            <div key={pro.id} className="allprojectSingle">
              {pro.title}
            </div>
          ))}
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
