import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PageLayout from '../components/PageLayout'
import Header from '../components/Header'
import TodoDetails from '../components/TodoDetails'

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
    <PageLayout>
      <Header />
      <TodoDetails {...todo} />
    </PageLayout>
  )
}
