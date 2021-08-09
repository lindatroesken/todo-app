import axios from 'axios'

export const getAllTodos = () =>
  axios.get('/api/todo').then(response => response.data)

export const postTodo = description =>
  axios.post('/api/todo', { description: description, status: 'OPEN' })

export const putTodo = todo => axios.put(`/api/todo/${todo.id}`, todo)
