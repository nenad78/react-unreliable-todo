import React, { Fragment, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { registerSession } from '../../actions/session'
import SessionForm from './SessionForm'

const Sessions = ({ registerSession, history, session: { session, loading } }) => {
  const [formData, setFormData] = useState({
    errorRate: ''
  })

  const { errorRate } = formData

  const onChange = e => {
    setFormData({ [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    registerSession(parseInt(errorRate), history)
  }

  return (
    <div>
      <div className="mb-5">
        <div className="card card-body m-auto" style={{ width: '32rem' }}>
          <h2>Create Session</h2>
          <p>Enter number between 0 - 100</p>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input type="number" className="form-control" name="errorRate" value={errorRate} onChange={e => onChange(e)} min="1" max="100" placeholder="Failure rate" disabled={session !== null ? 'disabled' : ''} />
            </div>
            <button className="btn btn-primary" type="submit" disabled={session !== null ? 'disabled' : ''}>Create Session</button>
          </form>
        </div>
      </div>
      <hr />
      {session ? (<Fragment>
        <SessionForm session={session} />
      </Fragment>) : (<Fragment>
        <p className="lead text-center">No session has been made yet</p>
      </Fragment>)}
    </div>
  )
}

Sessions.propTypes = {
  registerSession: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  session: state.session
})
export default connect(mapStateToProps, { registerSession })(withRouter(Sessions))
