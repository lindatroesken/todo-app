import './Board.css'
import TodoItem from './TodoItem'

export default function Board(props) {
  return (
    <section className="board">
      <h2>{props.title}</h2>
      <ul className="board-list">
        {props.todos.map(todo => {
          return (
            <li key={todo.id}>
              <TodoItem
                todo={todo}
                onAdvance={props.onAdvance}
                onDelete={props.onDelete}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
