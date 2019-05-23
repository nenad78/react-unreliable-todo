import { TODOS_ERROR, GET_TODOS, UPDATE_TODOS, ADD_TODO, SELECTED_TODO, TODO_UPDATED, TOGGLE_TODO_COMPLETED } from '../actions/types'

const initialState = {
  todo: null,
  todos: [],
  loading: true
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_TODOS:
    case UPDATE_TODOS:
      return { ...state, todos: Object.values(payload.todos), loading: false }

    case ADD_TODO:
      const todos = [...state.todos, payload.todo]
      return { ...state, todos, loading: false }

    case TODO_UPDATED:
      const updatedTodos = [...state.todos]
      const index = updatedTodos.findIndex(t => t.id === payload.todo.id)
      updatedTodos[index] = payload.todo
      return { ...state, todos: updatedTodos, todo: null, loading: false }

    case SELECTED_TODO:
      return { ...state, todo: { ...state.todos.find(t => t.id === payload.id) } }

    case TODOS_ERROR:
      return { ...state, loading: false }

    case TOGGLE_TODO_COMPLETED:
      const todoIndex = state.todos.findIndex(t => t.id === payload.id)
      const newTodos = [...state.todos]
      newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted
      return { ...state, todos: newTodos, todo: null, loading: false }

    default:
      return state
  }
}