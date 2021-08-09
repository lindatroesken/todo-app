import './TodoItem.css'
import PropTypes from 'prop-types'

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onAdvance: PropTypes.func,
  onDelete: PropTypes.func,
}

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
