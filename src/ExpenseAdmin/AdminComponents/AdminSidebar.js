import React from 'react'
import { Link } from 'react-router-dom';


export const AdminSidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
    <div className="sidebar-content js-simplebar">
      <a className="sidebar-brand" href="index.html">
        <span className="align-middle">Expense Tracker</span>
      </a>

      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/AdminDashboard/MyAdminDashboard">
            <i className="align-middle" data-feather="home"></i>
            <span className="align-middle">Admin Dashboard</span>
          </Link>
        </li>

        <li className="sidebar-item">
          <Link className="sidebar-link" to="/AdminDashboard/UsersData">
            <i className="align-middle" data-feather="users"></i>{" "}
            <span className="align-middle">Users</span>
          </Link>
        </li>

        <li className="sidebar-item">
        <Link className="sidebar-link" to="/AdminDashboard/AdminIncomeRecord">
            <i className="align-middle" data-feather="database"></i>{" "}
            <span className="align-middle">Show Income Record</span>
          </Link>
        </li>

        <li className="sidebar-item">
        <Link className="sidebar-link" to="/AdminDashboard/AdminExpenseRecord">
            <i className="align-middle" data-feather="database"></i>{" "}
            <span className="align-middle">Show Expense Recoed</span>
          </Link>
        </li>

       
        <li className="sidebar-item">
          <Link className="sidebar-link" to="/AdminDashboard/AdminContact">
            <i className="align-middle" data-feather="message-circle"></i>{" "}
            <span className="align-middle">Query</span>
          </Link>
        </li>

        

       
       {/*  <li className="sidebar-item">
          <Link className="sidebar-link" to="/AdminDashboard/">
            <i className="align-middle" data-feather="log-in"></i>{" "}
            <span className="align-middle">Sign In</span>
          </Link>
        </li> */}

        <li className="sidebar-item">
        <Link className="sidebar-link" to="/AdminDashboard/AdminLogout">
            <i className="align-middle" data-feather="log-out"></i>{" "}
            <span className="align-middle">Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default AdminSidebar
