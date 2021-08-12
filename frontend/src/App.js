import './App.css'
import { useEffect, useState } from 'react'
import {
  deleteTodo,
  getAllTodos,
  postTodo,
  putTodo,
} from './service/todo-api-service'
import { nextStatus } from './service/todo-service'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Homepage from './pages/Homepage'
import DetailsPage from './pages/DetailsPage'
import Header from "./components/Header";
import SingleStatusPage from "./pages/SingleStatusPage";

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

  const removeTodo = id =>
    deleteTodo(id)
      .then(() => getAllTodos())
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage
            todos={todos}
            advanceTodo={advanceTodo}
            removeTodo={removeTodo}
            createNewTodo={createNewTodo}
          />
        </Route>
        <Route path="/board/:status">
          <SingleStatusPage todos={todos} onAdvance={advanceTodo} onDelete={removeTodo}/>
        </Route>
        <Route path="/details/:id">
          <DetailsPage />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}
