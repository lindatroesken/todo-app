import './Header.css'
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Super Kanban</h1>
        <div className="nav">
            <Link to="/board/open">ToDos</Link>
            <Link to="/board/in_progress">In Progress</Link>
            <Link to="/board/done">Done</Link>
            <Link to="/">Kanban-Board</Link>

        </div>
    </header>
  )
}
