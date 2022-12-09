import React from 'react'

export default function Header() {
  return (
    <nav className='teal'>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">React Shop Project</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a><i class="material-icons right">shopping_cart</i></a></li>
        <li><a class="waves-effect waves-light btn">Sign In</a></li>
      </ul>
    </div>
  </nav>
  )
}
