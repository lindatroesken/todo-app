import { Link } from 'react-router-dom'
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import styled from "styled-components/macro";
import {getAllTodos} from "../service/todo-api-service";

export default function Details() {
    const params = useParams();
    console.log(params)

  // const location = useLocation()
  //   const {todo} = location
  // console.log(todo)

  return (
    <Wrapper>
      <Header />
      <p>Description: {params.id}</p>
      <Link to="/">Back</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background-color: hotpink;
    a {
        padding: 4px;
        background: aquamarine;
        color: white;
        text-decoration: none;
    }
    `