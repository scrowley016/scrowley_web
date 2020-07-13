import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProject} from '../store/project'

class SingleProject extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchSingleProject(this.props.match.params.id)
  }

  render() {
    const single = this.props.single

    return (
      <div>
        <div className="stars">
          <div className="twinkling">
            {single && (
              <div className="single">
                <iframe
                  className="proImageSin"
                  width="560"
                  height="315"
                  src={single.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <div className="proTitleSin">{single.title}</div>

                <div className="proShortSin">Dates:{single.dates}</div>

                <div className="proShortSin">My Role: {single.role}</div>
                <div className="proShortSin">
                  Technology Used: {single.technology}
                </div>

                <div className="proShortSin">
                  About: {single.longDescription}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    single: state.project.single
  }
}

const mapDispatch = dispatch => ({
  fetchSingleProject: id => dispatch(fetchSingleProject(id))
})

export default connect(mapState, mapDispatch)(SingleProject)
