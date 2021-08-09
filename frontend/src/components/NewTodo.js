import './NewTodo.css'
import { useState } from 'react'

export default function NewTodo(props) {
  const [description, setDescription] = useState('')

  const handleAddClick = () => {
    props.onAdd(description).then(() => setDescription(''))
  }

  return (
    <section className="new-todo">
      <input
        type="text"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </section>
  )
}
