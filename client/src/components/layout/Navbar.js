import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
      <Link to="/" className="navbar-brand">Todo App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/todos" className="nav-link">Todos</Link>
          </li>
          <li className="nav-item">
            <Link to="/sessions" className="nav-link">Manage Session</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
