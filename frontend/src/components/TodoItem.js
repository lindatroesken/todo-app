import './TodoItem.css'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

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
      <TodoItemStyle>
        <section className="todo-item">
          <h3>{todo.description}</h3>
            <TodoItemButtonStyle>
          <section className="todo-item__button-group">
            {onAdvance && <button onClick={() => onAdvance(todo)}>Advance</button>}
            {onDelete && <button onClick={() => onDelete(todo.id)}>Delete</button>}
          </section>
            </TodoItemButtonStyle>
        </section>
      </TodoItemStyle>
  )
}

const TodoItemStyle = styled.section`
    border: 1px solid #333;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 1px 2px 8px #666;
    background-color: hotpink;
`
const TodoItemButtonStyle = styled.section`
    display: flex;
    justify-content: flex-end;
    padding: 5px;
`