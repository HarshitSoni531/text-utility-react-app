// Navbar.js
import React from "react";

export default function Navbar(props) {
  return (
    <div style={{ backgroundColor: props.bg_color }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/" style={{ color: props.color }}>
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: props.color }}
                  to="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about"
                  style={{ color: props.color }}
                >
                  About
                </a>
              </li>
            </ul>
            <div
              className="form-check form-switch"
              style={{ marginLeft: "5px" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onChange={props.onChange}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <div style={{ color: props.color }}>
                <label
                  className="form-check-label "
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable {props.type} mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
