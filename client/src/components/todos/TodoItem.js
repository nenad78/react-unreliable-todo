import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

import { deleteTodo, selectedTodo, toggleCompleted } from '../../actions/todo'

const TodoItem = ({ todo, deleteTodo, selectedTodo, toggleCompleted }) => {

  const todoStyle = {
    textDecoration: todo.isCompleted ? 'line-through' : ''
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-1">
      <p style={todoStyle} className="mt-2 text-color lead">{todo.text}</p>
      <span><Moment format='YYYY/MM/DD'>{todo.created}</Moment></span>
      <div>
        <button onClick={() => toggleCompleted(todo)} className="btn btn-success"><i className="fa fa-check"></i></button>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger" ><i className="fas fa-trash"></i></button>
        <button onClick={() => selectedTodo(todo.id)} className="btn btn-warning ml-2" > <i className="fas fa-pencil-alt"></i></button>
      </div>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  selectedTodo: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired
}

export default connect(null, { deleteTodo, selectedTodo, toggleCompleted })(TodoItem)
