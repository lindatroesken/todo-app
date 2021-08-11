import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function DetailsPage() {
  const { id } = useParams()

  const [todo, setTodo] = useState()

  useEffect(() => {
    axios
      .get(`/api/todo/${id}`)
      .then(response => response.data)
      .then(fetchedTodo => setTodo(fetchedTodo))
      .catch(error => console.error(error))
  }, [id])

  if (!todo) {
    return <p>loading</p>
  }

  return (
    <Wrapper>
      <h2>{todo.description}</h2>
      <p>Status: {todo.status}</p>
      <Link to="/">Back</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  a {
    padding: 4px;
    border: 1px solid hotpink;
    background: none;
    color: hotpink;
    text-decoration: none;
  }
`
