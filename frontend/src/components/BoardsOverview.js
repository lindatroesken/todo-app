import './BoardsOverview.css'
import Board from './Board'

export default function BoardsOverview(props) {
  const openTodos = props.todos.filter(todo => todo.status === 'OPEN')
  const inProgressTodos = props.todos.filter(
    todo => todo.status === 'IN_PROGRESS'
  )
  const doneTodos = props.todos.filter(todo => todo.status === 'DONE')

  return (
    <main className="boards-overview">
      <Board title="Todo" todos={openTodos} onAdvance={props.onAdvance} />
      <Board
        title="Doing"
        todos={inProgressTodos}
        onAdvance={props.onAdvance}
      />
      <Board title="Done" todos={doneTodos} />
    </main>
  )
}
