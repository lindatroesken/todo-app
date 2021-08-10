import Header from "./Header";
import BoardsOverview from "./BoardsOverview";
import NewTodo from "./NewTodo";
import React from "react";

export default function Home({todos, onAdvance, onDelete, onAdd}){
    return (
        <div className="page-layout">
            <Header />
            <BoardsOverview
                todos={todos}
                onAdvance={onAdvance}
                onDelete={onDelete}
            />
            <NewTodo onAdd={onAdd} />
        </div>)
}