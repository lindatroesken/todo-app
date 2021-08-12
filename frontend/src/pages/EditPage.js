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
        getTodoById(id).then(setTodo).catch(console.error)
    }, [id])

    return (
        <PageLayout>
            <Header />
            {todo ? <EditForm todo={todo} onSave={onUpdate} /> : <p>loading</p>}
        </PageLayout>
    )
}
