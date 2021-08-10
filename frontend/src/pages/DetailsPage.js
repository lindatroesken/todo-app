import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function DetailsPage() {
  return (
    <Wrapper>
      <h2>This is a wonderful title</h2>
      <p>Status: OPEN</p>
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
