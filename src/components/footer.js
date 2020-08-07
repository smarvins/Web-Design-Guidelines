import React from 'react'
import './style.scss'
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li>
              <Link to="/01/">Layout</Link>
            </li>
            <li>
              <Link to="/02/">Color</Link>
            </li>
            <li>
              <Link to="/03/">Font</Link>
            </li>
            <li>
              <Link to="/04/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
);


export default Footer
