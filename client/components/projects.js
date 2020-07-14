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
      <div className="stars">
        <div className="twinkling">
          <div className="timeline">
            <div>
              {this.props.project &&
                this.props.project.map(pro => (
                  <div
                    className={
                      pro.id % 2 === 0 ? 'container right' : 'container left'
                    }
                  >
                    <div className="content">
                      <div key={pro.id}>
                        <Link to={`/${pro.id}`} className="proLink">
                          <div className="proTitle">
                            {pro.title} | {pro.dates}
                          </div>

                          <div>
                            <img className="proImage" src={pro.image} />
                          </div>
                          <div className="proShort">{pro.shortDescription}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
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
