import React from "react";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <header>
        <div className="row">
          <div className="col-md-8">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <i className="fa fa-bars" />
                  <img
                    className="logo m-2"
                    src="https://campaigns.hotstar.com/test-directory/disney-hotstar-logo.png"
                    alt=""
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mt-1 mb-2 mb-lg-0">
                    <li className="nav-item ">
                      <a
                        className="nav-link active "
                        aria-current="page"
                        href="#"
                        id="title">
                        TV
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#" id="title">
                        Movies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                        id="title">
                        Sports
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" id="title">
                        Disney
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" id="kids">
                        <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-7">
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Search"
                />
              </div>
              <div className="col-md-3">
                <div>
                  <button className="subsr mt-4">SUBSCRIBE</button>
                </div>
              </div>
              <div className="col-md-2">
                <li className="nav-item">
                  <a className="nav-link" href="#" id="login">
                    LOGIN
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
