import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function TodoForm({ todo, onSave }) {
  const [formData, setFormData] = useState({
    description: todo.description,
    status: todo.status,
  })
  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    const updatedTodo = { ...todo, ...formData }
    onSave(updatedTodo).then(() => history.push('/'))
  }

  const resetForm = () => {
    setFormData({
      description: todo.description,
      status: todo.status,
    })
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Status
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="OPEN">open</option>
          <option value="IN_PROGRESS">doing</option>
          <option value="DONE">done</option>
        </select>
      </label>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
      <button>Save</button>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  display: grid;
  grid-gap: 12px;
  place-content: center;

  input,
  select {
    display: block;
    width: 100%;
  }
`
