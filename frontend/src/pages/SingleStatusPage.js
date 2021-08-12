import Board from "../components/Board";
import {useState} from "react";
import {useParams} from "react-router-dom";

export default function SingleStatusPage({todos, onAdvance, onDelete, }){
    const {status} = useParams()
    const filteredTodos = todos.filter(todo => todo.status === status.toUpperCase())

    return (
        <main className="boards-overview">
            <Board title={status} todos={filteredTodos} onAdvance={onAdvance} onDelete={onDelete}/>
        </main>
    )
}