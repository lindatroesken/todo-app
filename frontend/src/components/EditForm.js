import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import {useState} from "react";

export default function EditForm({ todo, onUpdate }) {
    const [description, setDescription] = useState(todo.description);
    const [status, setStatus] = useState(todo.status)
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {...todo, description: description, status: status}
        onUpdate(newTodo).then(() => history.push('/'))
    }

    const handleDescriptionChange = event => setDescription(event.target.value)

    const handleStatusChange = event => setStatus(event.target.value)

    const handleResetForm = () => {
        setDescription(todo.description)
        setStatus(todo.status)
    }

    return (
        <Wrapper onSubmit={handleSubmit}>
            <h1>EDIT</h1>
            <p>Description:
                <input type="text" value={description} onChange={handleDescriptionChange}/></p>
            <p>Status:
                <select value={status} onChange={handleStatusChange}>
                    <option value="OPEN">TODO</option>
                    <option value="IN_PROGRESS">DOING</option>
                    <option value="DONE">DONE</option>
                </select>
            </p>

            <button type="submit" >Save</button>
            <button type="button" onClick={handleResetForm}>Reset</button>
            <Link to="/">Home</Link>
        </Wrapper>
    )
}

const Wrapper = styled.form`
  padding: 12px;
`