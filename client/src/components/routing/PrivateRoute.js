import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, session: { isAuthenticated, loading } }, ...rest) => (
  <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to='/sessions' />) : (<Component {...props} />)} />
)

PrivateRoute.propTypes = {
  session: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(PrivateRoute)
