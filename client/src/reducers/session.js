import { SESSION_SUCCESS, SESSION_FAIL, SESSION_LOADED, SESSION_UPDATED, SESSION_DELETED } from '../actions/types'

const initialState = {
  sessionId: localStorage.getItem('sessionid'),
  session: null,
  errorRate: null,
  isAuthenticated: false,
  loading: true
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SESSION_LOADED:
      return {
        ...state,
        sessionId: payload.sessionId,
        session: payload.session,
        errorRate: payload.errorRate,
        isAuthenticated: true,
        loading: false
      }

    case SESSION_SUCCESS:
      localStorage.setItem('sessionid', payload.sessionId)
      localStorage.setItem('errorRate', payload.errorRate)
      localStorage.setItem('session', JSON.stringify(payload))
      return {
        ...state,
        sessionId: payload.sessionId,
        session: payload,
        errorRate: payload.errorRate,
        isAuthenticated: true,
        loading: false
      }

    case SESSION_UPDATED:
      const session = { ...state.session, errorRate: payload.errorRate }
      localStorage.setItem('errorRate', payload.errorRate)
      localStorage.setItem('session', JSON.stringify(session))
      return { ...state, session, errorRate: payload.errorRate, loading: false }

    case SESSION_FAIL:
    case SESSION_DELETED:
      localStorage.clear()
      return {
        ...state,
        sessionId: null,
        session: null,
        errorRate: null,
        isAuthenticated: false,
        loading: false
      }

    default:
      return state
  }
}