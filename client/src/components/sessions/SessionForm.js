import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateSession, deleteSession } from '../../actions/session'

const SessionForm = ({ session, updateSession, deleteSession, history }) => {
  const [formData, setFormData] = useState({
    errorRate: ''
  })

  const { errorRate } = formData

  useEffect(() => {
    setFormData({
      errorRate: session === null ? '' : session.errorRate
    })
  }, [session])

  const onChange = e => {
    setFormData({ [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    updateSession(formData, history)

    setFormData({ errorRate: '' })
  }

  return (
    <div className="card m-auto" style={{ width: '32rem' }}>
      <div className="card-body">
        <h5 className="card-title">Session Info</h5>
        <h6 className="card-subtitle mb-2">Session ID: {session.sessionId}</h6>
        <h6 className="card-subtitle mb-2">Session Failure Rate: {session.errorRate}</h6>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="number" className="form-control" name="errorRate" value={errorRate} onChange={e => onChange(e)} placeholder="* Change failure rate" />
            <small className="text-muted">Change session's failure rate</small>
          </div>
          <button className="btn btn-primary" type="submit">Update Session</button>
          <button onClick={() => deleteSession()} className="btn btn-danger" type="button">Delete Session</button>
        </form>
      </div>
    </div>
  )
}

SessionForm.propTypes = {
  session: PropTypes.object.isRequired,
  updateSession: PropTypes.func.isRequired,
  deleteSession: PropTypes.func.isRequired
}

export default connect(null, { updateSession, deleteSession })(withRouter(SessionForm))
