import React, { Component } from "react";
import {Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <h2>
            <img src="https://img.icons8.com/plasticine/50/000000/login-rounded-right.png" />
              Login
            </h2>
          </Link>
        </li>
        <li className="nav nav-tabs">
          <Link to="/register" className="nav-link">
            <h2>
            <img src="https://img.icons8.com/plasticine/50/000000/add-user-male.png"/>
              Register
            </h2>
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            <h2>
              <img src="https://img.icons8.com/plasticine/50/000000/person-male.png" />
              User
            </h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/uploads" className="nav-link">
            <h2>
              <img src="https://img.icons8.com/flat_round/50/000000/upload-document--v1.png" />
              Assignment Submissions
            </h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/assignments" className="nav-link">
            <h2>
              <img src="https://img.icons8.com/bubbles/50/000000/list.png" />
              Assignment List
            </h2>
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            <h2>
              <img src="https://img.icons8.com/plasticine/50/000000/logout-rounded-left.png" />
              Logout
            </h2>
          </a>
        </li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-light rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar1"
        >
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h2><img src="https://img.icons8.com/color/50/000000/home.png"/> Home</h2>
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink: loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
