import './TodoItem.css'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

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
    <TodoItemStyleComp>
      <h3>{todo.description}</h3>
      <section className="todo-item__button-group">
        <Link to={`/details/${todo.id}`}>Details</Link>
        {onAdvance && (
          <ButtonComp adv onClick={() => onAdvance(todo)}>
            Advance
          </ButtonComp>
        )}
        {onDelete && (
          <ButtonComp del onClick={() => onDelete(todo.id)}>
            Delete
          </ButtonComp>
        )}
      </section>
    </TodoItemStyleComp>
  )
}

const TodoItemStyleComp = styled.section`
  border: 1px solid #333;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 1px 2px 8px #666;
`

const ButtonComp = styled.button`
  ${props => (props.del ? 'background-color: lightcoral;' : '')}
  ${props => (props.adv ? 'background-color: lightblue;' : '')}
`
