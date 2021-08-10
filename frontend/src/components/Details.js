import {Link} from "react-router-dom";
import React from "react";
import {useParams} from "react-router-dom";

export default function Details(){
    const {todo} = useParams()
    // console.log(todo)

    return (
        <div>
            <h1>Welcome to Details</h1>
            <p>Details: {}</p>
            <Link to="/">Home</Link>
        </div>

    );
}