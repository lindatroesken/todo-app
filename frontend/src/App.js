import './App.css'
import Header from './components/Header'
import BoardsOverview from './components/BoardsOverview'
import NewTodo from './components/NewTodo'
import { useEffect, useState } from 'react'
import { getAllTodos, postTodo, putTodo } from './service/todo-api-service'
import { nextStatus } from './service/todo-service'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAllTodos()
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))
  }, [])

  const createNewTodo = description =>
    postTodo(description)
      .then(() => getAllTodos())
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))

  const advanceTodo = todo => {
    const newTodo = { ...todo, status: nextStatus(todo.status) }
    putTodo(newTodo)
      .then(() => getAllTodos())
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))
  }

  return (
    <div className="page-layout">
      <Header />
      <BoardsOverview todos={todos} onAdvance={advanceTodo} />
      <NewTodo onAdd={createNewTodo} />
    </div>
  )
}
