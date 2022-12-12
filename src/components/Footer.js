import React from 'react'

export default function Footer() {
  return (
    <footer className="page-footer blue">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">React Shop</h5>
          <p className="grey-text text-lighten-4">React shop project using Fortnite API</p>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright
      <a href="#!" className="grey-text text-lighten-4 right">Diyorbek</a>
      </div>
    </div>
  </footer>
  )
}
