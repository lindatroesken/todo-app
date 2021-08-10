import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderStyle>
      <h1>Super Kanban</h1>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  background-color: limegreen;
  h1 {
    margin: 0;
    padding: 12px;
  }
`
