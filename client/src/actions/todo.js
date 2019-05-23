import axios from 'axios'

import {
  GET_TODOS,
  TODOS_ERROR,
  UPDATE_TODOS,
  ADD_TODO,
  SELECTED_TODO,
  TODO_UPDATED,
  SESSION_DELETED
} from './types'
import { setAlert } from './alert'

export const getTodos = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:9000/api/todos')

    dispatch({
      type: GET_TODOS,
      payload: res.data
    })
  } catch (err) {
    if (err.response.status === 500) {
      dispatch(setAlert('Something went wrong, Please refresh the page', 'danger'))
    }

    if (err.response.status === 401) {
      dispatch({
        type: SESSION_DELETED
      })

      dispatch(setAlert('You are not authorized, please create new session', 'default'))
    }

    dispatch({
      type: TODOS_ERROR
    })
  }
}

export const addTodo = formData => async dispatch => {
  formData.urgency = parseInt(formData.urgency)
  formData.isCompleted = false

  try {
    const res = await axios.post('http://localhost:9000/api/todos', formData)

    dispatch({
      type: ADD_TODO,
      payload: res.data
    })
  } catch (err) {
    dispatch(setAlert('Something went wrong, please try again', 'default'))
  }
}

export const editTodo = (formData, id) => async dispatch => {

  try {
    const res = await axios.put(`http://localhost:9000/api/todos/${id}`, formData)

    dispatch({
      type: TODO_UPDATED,
      payload: res.data
    })
  } catch (err) {
    if (err.response.status === 500) {
      dispatch(setAlert('Please try again', 'default'))
    }
  }
}

export const deleteTodo = id => async dispatch => {
  try {
    const res = await axios.delete(`http://localhost:9000/api/todos/${id}`)

    dispatch({
      type: UPDATE_TODOS,
      payload: res.data
    })
  } catch (err) {
    if (err.response.status === 500) {
      dispatch(setAlert('Something went wrong', 'default'))
    }
  }
}

export const selectedTodo = id => dispatch => {
  dispatch({
    type: SELECTED_TODO,
    payload: { id }
  })
}

export const toggleCompleted = todo => dispatch => {
  todo.isCompleted = !todo.isCompleted

  dispatch(editTodo(todo, todo.id))
}
