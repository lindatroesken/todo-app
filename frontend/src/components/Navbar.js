import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/board/OPEN">Open</NavLink>
      <NavLink to="/board/IN_PROGRESS">Doing</NavLink>
      <NavLink to="/board/DONE">Done</NavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`
