import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { getTodos } from '../../actions/todo'

const Todos = ({ getTodos, isAuthenticated, todo: { todos, loading } }) => {
  const [searchValue, setSearchValue] = useState({
    filterText: ''
  })

  const { filterText } = searchValue

  useEffect(() => {
    getTodos()
  }, [getTodos])

  const todo = todos.filter(t => filterText.toLowerCase() === '' || t.text.toLowerCase().includes(filterText)).map(t => (
    <TodoItem key={t.id} todo={t} />
  ))

  const onChange = e => {
    setSearchValue({ [e.target.name]: e.target.value })
  }

  return (
    <Fragment>
      <TodoForm />
      <div className="card card-body mb-3">
        <div className="form-group">
          <label>Search</label>
          <input type="text" className="form-control" name="filterText" value={filterText} onChange={e => onChange(e)} placeholder="Search Todo..." />
        </div>
      </div>
      <hr />
      {todo.length > 0 && !loading ? (<Fragment>{todo}</Fragment>) : (<Fragment><p className="lead">No todos found. Add something todo...</p></Fragment>)}
    </Fragment>
  )
}

Todos.propTypes = {
  getTodos: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todo: state.todo,
  isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, { getTodos })(Todos)
