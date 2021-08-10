import Header from '../components/Header'
import BoardsOverview from '../components/BoardsOverview'
import NewTodo from '../components/NewTodo'

export default function Homepage({
  todos,
  advanceTodo,
  removeTodo,
  createNewTodo,
}) {
  return (
    <div className="page-layout">
      <Header />
      <BoardsOverview
        todos={todos}
        onAdvance={advanceTodo}
        onDelete={removeTodo}
      />
      <NewTodo onAdd={createNewTodo} />
    </div>
  )
}
