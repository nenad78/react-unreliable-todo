import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addTodo, editTodo } from '../../actions/todo'

const TodoForm = ({ addTodo, editTodo, todo: { todo } }) => {
  const [formData, setFormData] = useState({
    text: '',
    urgency: '',
    isCompleted: ''
  })

  let { text, urgency } = formData

  useEffect(() => {
    setFormData({
      text: todo === null ? '' : todo.text,
      urgency: todo === null ? '' : todo.urgency,
      isCompleted: todo === null ? '' : todo.isCompleted
    })
  }, [todo])

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    todo === null ? addTodo(formData) : editTodo(formData, todo.id)

    setFormData({ text: '', urgency: '' })
  }

  return (
    <Fragment>
      <h2>Add Todo</h2>
      <div className="card card-body mb-3">
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Add Todo..." name="text" value={text} onChange={e => onChange(e)} required />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" placeholder="Set urgency between 1 - 5" name="urgency" value={urgency} onChange={e => onChange(e)} required min="1" max="5" />
          </div>

          <input type="submit" className="btn btn-primary mr-2" value="Submit" />
        </form>
      </div>
    </Fragment>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, { addTodo, editTodo })(TodoForm)
