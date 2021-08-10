import Header from '../components/Header'
import BoardsOverview from '../components/BoardsOverview'
import NewTodo from '../components/NewTodo'
import React from 'react'

export default function Home({ todos, onAdvance, onDelete, onAdd }) {
  return (
    <div className="page-layout">
      <Header />
      <BoardsOverview todos={todos} onAdvance={onAdvance} onDelete={onDelete} />
      <NewTodo onAdd={onAdd} />
    </div>
  )
}
