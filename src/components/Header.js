import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href="/" className="nabar-brand">
            Lyricify
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
         
          
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
