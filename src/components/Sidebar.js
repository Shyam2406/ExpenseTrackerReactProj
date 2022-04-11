import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">Expense Tracker</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-item active">
            <Link className="sidebar-link" to="/">
              <i className="align-middle" data-feather="sliders"></i>
              <span className="align-middle">Dashboard</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/Role">
              <i className="align-middle" data-feather="book"></i>{" "}
              <span className="align-middle">Add Income</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/GetRole">
              <i className="align-middle" data-feather="book"></i>{" "}
              <span className="align-middle">Add Expenses</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/GetRole">
              <i className="align-middle" data-feather="book"></i>{" "}
              <span className="align-middle">Generate Report</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/Subs">
              <i className="align-middle" data-feather="square"></i>{" "}
              <span className="align-middle">Subscription</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-forms.html">
              <i className="align-middle" data-feather="check-square"></i>{" "}
              <span className="align-middle">Forms</span>
            </a>
          </li>

          <li className="sidebar-header">My Account</li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/Prof">
              <i className="align-middle" data-feather="user"></i>{" "}
              <span className="align-middle">Profile</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-sign-up.html">
              <i className="align-middle" data-feather="user-plus"></i>{" "}
              <span className="align-middle">Sign Up</span>
            </a>
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="Signin">
              <i className="align-middle" data-feather="log-in"></i>{" "}
              <span className="align-middle">Sign In</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="pages-sign-up.html">
              <i className="align-middle" data-feather="log-out"></i>{" "}
              <span className="align-middle">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};



export default Sidebar;
