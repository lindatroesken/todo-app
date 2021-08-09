import './TodoItem.css'

export default function TodoItem(props) {
  return (
    <section className="todo-item">
      <h3>{props.todo.description}</h3>
      <section class="todo-item__button-group">
        {props.onAdvance && (
          <button onClick={() => props.onAdvance(props.todo)}>Advance</button>
        )}
        {props.onDelete && (
          <button onClick={() => props.onDelete(props.todo.id)}>Delete</button>
        )}
      </section>
    </section>
  )
}
