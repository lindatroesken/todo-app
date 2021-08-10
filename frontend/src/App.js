import './App.css'
import { useEffect, useState } from 'react'
import {
  deleteTodo,
  getAllTodos,
  postTodo,
  putTodo,
} from './service/todo-api-service'
import { nextStatus } from './service/todo-service'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

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
        <Switch>
          <Route path="/details">
            <Details/>
          </Route>
          <Route exact path="/">
              <Home todos={todos} onAdvance={advanceTodo} onDelete={removeTodo} onAdd={createNewTodo}/>
            </Route>
        </Switch>
      </Router>
  )
}
