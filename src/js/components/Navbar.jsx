import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand nav-link-name" to="/">
          Elizabeth Reynolds
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link link-underline link-underline-opacity-0 link-underline-opacity-75-hover nav-link"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-underline link-underline-opacity-0 link-underline-opacity-75-hover nav-link"
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link link-underline link-underline-opacity-0 link-underline-opacity-75-hover nav-link"
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
