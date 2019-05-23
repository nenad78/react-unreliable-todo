import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { getTodos } from '../../actions/todo'

const Todos = ({ getTodos, isAuthenticated, todo: { todos, loading } }) => {
  useEffect(() => {
    getTodos()
  }, [getTodos])

  const todo = todos.map(t => (
    <TodoItem key={t.id} todo={t} />
  ))

  return (
    <Fragment>
      <TodoForm />
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
