import axios from 'axios'

const GET_PROJECTS = 'GET_PROJECTS'

const addProjects = project => {
  return {
    type: GET_PROJECTS,
    project
  }
}

export const fetchProjects = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/projects')
      dispatch(addProjects(data))
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}

const initialState = {
  project: []
}

export default function fridgeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {...state, project: action.project}
    default:
      return state
  }
}
