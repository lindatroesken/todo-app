import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

NewTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default function NewTodo({ onAdd }) {
  const [description, setDescription] = useState('')

  const handleAddClick = () => {
    onAdd(description).then(() => setDescription(''))
  }

  return (
    <Wrapper>
      <input
        type="text"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 12px;
`
