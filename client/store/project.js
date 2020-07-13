import axios from 'axios'

const GET_PROJECTS = 'GET_PROJECTS'
const SINGLE_PROJECT = 'SINGLE_PROJECT'

const addProjects = project => {
  return {
    type: GET_PROJECTS,
    project
  }
}
export const addSingleProject = single => {
  return {
    type: SINGLE_PROJECT,
    single
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

export const fetchSingleProject = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/projects/${id}`)
      dispatch(addSingleProject(data))
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}

const initialState = {
  project: [],
  single: {}
}

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {...state, project: action.project}
    case SINGLE_PROJECT:
      return {...state, single: action.single}
    default:
      return state
  }
}
