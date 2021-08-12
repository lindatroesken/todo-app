import {useHistory} from "react-router-dom";
import {useState} from "react";

export default function useEditForm(todo, onSave){
    const [description, setDescription] = useState(todo.description);
    const [status, setStatus] = useState(todo.status)
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        const newTodo = {...todo, description: description, status: status}
        console.log(newTodo)
        onSave(newTodo)
        history.push('/')
    }

    const handleDescriptionChange = event => setDescription(event.target.value)

    const handleStatusChange = event => setStatus(event.target.value)

    const handleResetForm = () => {
        setDescription(todo.description)
        setStatus(todo.status)
    }

    return {status, description, handleSubmit, handleStatusChange,handleDescriptionChange,handleResetForm}

}