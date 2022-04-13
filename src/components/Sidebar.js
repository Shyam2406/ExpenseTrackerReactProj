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
              <i className="align-middle" data-feather="home"></i>
              <span className="align-middle">Dashboard</span>
            </Link>
          </li>

         
          <li className="sidebar-item">
            <Link className="sidebar-link" to="/Expenses">
              <i className="align-middle" data-feather="trending-up"></i>{" "}
              <span className="align-middle">Add Expenses</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/Report">
              <i className="align-middle" data-feather="file-text"></i>{" "}
              <span className="align-middle">Generate Report</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/PerBill">
              <i className="align-middle" data-feather="bold"></i>{" "}
              <span className="align-middle">Personal Bill</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/About">
              <i className="align-middle" data-feather="square"></i>{" "}
              <span className="align-middle">About Us</span>
            </Link>
          </li>

          <li className="sidebar-item">
          <Link className="sidebar-link" to="/Contact">
              <i className="align-middle" data-feather="send"></i>{" "}
              <span className="align-middle">Contact Us</span>
            </Link>
          </li>

          <li className="sidebar-header">My Account</li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/Prof">
              <i className="align-middle" data-feather="user"></i>{" "}
              <span className="align-middle">Profile</span>
            </Link>
          </li>

          <li className="sidebar-item">
          <Link className="sidebar-link" to="/SignUp">
              <i className="align-middle" data-feather="user-plus"></i>{" "}
              <span className="align-middle">Sign Up</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="Signin">
              <i className="align-middle" data-feather="log-in"></i>{" "}
              <span className="align-middle">Sign In</span>
            </Link>
          </li>

          <li className="sidebar-item">
          <Link className="sidebar-link" to="/LogOut">
              <i className="align-middle" data-feather="log-out"></i>{" "}
              <span className="align-middle">Sign Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};



export default Sidebar;
