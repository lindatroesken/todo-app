import Header from '../components/Header'
import BoardsOverview from '../components/BoardsOverview'
import NewTodo from '../components/NewTodo'
import './Hompage.css'

export default function Homepage({
  todos,
  advanceTodo,
  removeTodo,
  createNewTodo,
}) {
  return (
    <div className="page-layout">
      <BoardsOverview
        todos={todos}
        onAdvance={advanceTodo}
        onDelete={removeTodo}
      />
      <NewTodo onAdd={createNewTodo} />
    </div>
  )
}
