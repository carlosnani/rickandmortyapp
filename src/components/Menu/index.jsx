import { Link } from "react-router-dom";

import './style.scss'

export function Menu() {
  return (
    <>
      <nav className="mainMenu">
        <ul>
          <li><Link to="/">Home</Link></li>
          |
          <li><Link to="/episodes">episodes</Link></li>
          |
          <li><Link to="/locations">Episodes</Link></li>
          |
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </>

  )
}
