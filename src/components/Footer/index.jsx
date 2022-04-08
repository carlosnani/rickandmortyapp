import React from 'react'
import { FaGithub }  from "react-icons/fa"

import './style.scss'

export function Footer() {
  return (
    <footer>
      <div>
        <p>
          <FaGithub />
          <a
            href="https://github.com/carlosnani"
            target="_blank"
          >
            Carlos Nani
          </a>
        </p>
      </div>
    </footer>
  )
}
