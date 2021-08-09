import axios from 'axios'

export const getAllTodos = () =>
  axios.get('/api/todo').then(response => response.data)
