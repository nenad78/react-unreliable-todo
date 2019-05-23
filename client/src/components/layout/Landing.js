import React from 'react'
import { Link } from 'react-router-dom'

const Landing = props => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Todos App</h1>
          <p className="lead">
            Welcome to TodoApp. To start using this app first head over to Manage Session page.
          </p>
          <div className="buttons">
            <Link to="/todos" className="btn btn-primary">Todos</Link>
            <Link to="/sessions" className="btn btn-light">Manage Sessions</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
