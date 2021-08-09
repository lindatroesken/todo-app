import './App.css'
import Header from './components/Header'
import BoardsOverview from './components/BoardsOverview'
import NewTodo from './components/NewTodo'
import { useEffect, useState } from 'react'
import { getAllTodos } from './service/todo-api-service'
import axios from 'axios'

export default function App() {
  const [todos, setTodos] = useState([])

  const createNewTodo = description =>
    axios
      .post('/api/todo', { description: description, status: 'OPEN' })
      .then(() => getAllTodos())
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))

  useEffect(() => {
    getAllTodos()
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="page-layout">
      <Header />
      <BoardsOverview todos={todos} />
      <NewTodo onAdd={createNewTodo} />
    </div>
  )
}
