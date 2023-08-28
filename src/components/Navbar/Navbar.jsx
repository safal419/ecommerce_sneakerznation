import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/home">
                Sneakerz Nation
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto py-4 py-md-0">
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                    <Link
                      className="nav-link "
                      to="/home"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home <i className="fa-sharp fa-solid fa-house"></i>
                    </Link>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" to="/">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" to="/">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" to="/">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 mx-5">
                    <Link className="nav-link" to="/loginandsignup">
                      Login and Signup
                    </Link>
                  </li>
                </ul>
                <div className="input-wrapper">
                  <button className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="25px"
                      width="25px"
                    >
                      <path
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        stroke="black"
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      ></path>
                      <path
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        stroke="black"
                        d="M22 22L20 20"
                      ></path>
                    </svg>
                  </button>
                  <input
                    placeholder="Search.."
                    className="input"
                    name="text"
                    type="text"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
