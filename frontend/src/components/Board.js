import './Board.css'
import TodoItem from './TodoItem'

export default function Board({ title, todos, onAdvance, onDelete }) {
  return (
    <section className="board">
      <h2>{title}</h2>
      <ul className="board-list">
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <TodoItem todo={todo} onAdvance={onAdvance} onDelete={onDelete} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
