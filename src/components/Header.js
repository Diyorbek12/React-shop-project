function Header() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">React Shop</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="#!">React</a></li>
            <li><a href="#!">Components</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;