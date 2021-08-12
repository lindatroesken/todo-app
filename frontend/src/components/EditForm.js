import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import useEditForm from "../hooks/useEditForm";

export default function EditForm({ todo, onSave }) {
    const {status, description, handleSubmit, handleStatusChange,handleDescriptionChange,handleResetForm} = useEditForm(todo, onSave)

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