import './TodoItem.css'

export default function TodoItem(props) {
  return (
    <section className="todo-item">
      <h3>{props.todo.description}</h3>
      <section class="todo-item__button-group">
        <button>Advance</button>
        <button>Delete</button>
      </section>
    </section>
  )
}
