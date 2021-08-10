import PropTypes from 'prop-types'
import styled from 'styled-components'
import React from "react";
import {Link} from "react-router-dom";

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
        <section>
          <h3>{todo.description}</h3>
            <TodoItemButtonStyle>
          <section className="todo-item__button-group">
            {onAdvance && <ButtonComp adv onClick={() => onAdvance(todo)}>Advance</ButtonComp>}
            {onDelete && <ButtonComp del onClick={() => onDelete(todo.id)}>Delete</ButtonComp>}
          </section>

          <Link to="/details" todo={todo}>Details</Link>

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

const ButtonComp = styled.button`
  padding: 5px;
  border-radius: 5px;
  ${props => props.adv ? 'background-color: green;': ''}
  ${props => props.del ? 'background-color: red;': ''} 
`
