const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Elizabeth Reynolds
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                Coming Soon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
