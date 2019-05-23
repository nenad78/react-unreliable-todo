import axios from 'axios'

import { setAlert } from './alert'
import { SESSION_SUCCESS, SESSION_FAIL, SESSION_LOADED, SESSION_UPDATED, SESSION_DELETED } from './types'
import setSessionId from '../utils/setSession'

export const loadSession = () => dispatch => {
  if (localStorage.sessionid) {
    setSessionId(localStorage.sessionid)

    const sessionId = localStorage.getItem('sessionid')
    const errorRate = localStorage.getItem('errorRate')
    const session = JSON.parse(localStorage.getItem('session'))

    dispatch({
      type: SESSION_LOADED,
      payload: { sessionId, errorRate, session }
    })
  } else {
    dispatch({ type: SESSION_FAIL })
  }
}

export const registerSession = (errorRate, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:9000/api/session', { errorRate })

    dispatch({
      type: SESSION_SUCCESS,
      payload: res.data
    })

    dispatch(setAlert('Session Created', 'success'))

    history.push('/todos')

    dispatch(loadSession())
  } catch (err) {
    if (err.response.status === 401) {
      dispatch(setAlert(err.response.message, 'danger'))
    }

    dispatch({
      type: SESSION_FAIL
    })
  }
}

export const updateSession = ({ errorRate }, history) => async dispatch => {
  errorRate = parseInt(errorRate)

  try {
    const res = await axios.patch('http://localhost:9000/api/session', { errorRate })

    dispatch({
      type: SESSION_UPDATED,
      payload: res.data
    })

    dispatch(setAlert('Failure Rate Changed', 'success'))

    history.push('/todos')
  } catch (err) {
    dispatch(setAlert('Upss! Something went wrong, try again', 'default'))
  }
}

export const deleteSession = () => async dispatch => {
  try {
    const res = await axios.delete('http://localhost:9000/api/session')

    dispatch({
      type: SESSION_DELETED,
      payload: res.data
    })

    dispatch(setAlert('Session Deleted', 'danger'))
  } catch (err) {
    if (err.response.status === 401) {
      localStorage.clear()

      dispatch(setAlert('Please create a new session', 'warning'))
    }

    if (err.response.status === 500) {
      dispatch(setAlert('Upsss! Please try again', 'default'))
    }
  }
}