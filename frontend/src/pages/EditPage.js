import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import EditForm from "../components/EditForm";
import {getTodoById} from "../service/todo-api-service";

export default function EditPage({onUpdate}) {
    const { id } = useParams()
    const [todo, setTodo] = useState()

    useEffect(() => {
        getTodoById(id)
            .then(todo => setTodo(todo))
            .catch(error => console.error(error))
    }, [id])

    if (!todo) {
        return <p>loading</p>
    }

    return (
        <PageLayout>
            <Header />
            <EditForm todo={todo} onUpdate={onUpdate} />
        </PageLayout>
    )
}
