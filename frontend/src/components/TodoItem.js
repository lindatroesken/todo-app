import './TodoItem.css'

export default function TodoItem({ todo, onAdvance, onDelete }) {
  return (
    <section className="todo-item">
      <h3>{todo.description}</h3>
      <section className="todo-item__button-group">
        {onAdvance && <button onClick={() => onAdvance(todo)}>Advance</button>}
        {onDelete && <button onClick={() => onDelete(todo.id)}>Delete</button>}
      </section>
    </section>
  )
}
