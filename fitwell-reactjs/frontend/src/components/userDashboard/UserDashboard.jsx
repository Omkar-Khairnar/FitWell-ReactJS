import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./navbar/UserNavbar";
import "./User_Dashboard.css";

const UserDashboard = () => {
  return (
    <div className="dashboard" style={{backgroundColor : "white"}}>
      <UserNavbar />

      <div class="dashboard-app">
        <header class="dashboard-toolbar">
          <a href="#!" class="menu-toggle">
            <i class="fas fa-bars"></i>
          </a>
          <a href="/Home" class="menu-toggle">
            <i class="fas fa-right-from-bracket"></i>
            Logout
          </a>
        </header>
        <Outlet />

      </div>
    </div>
  );
};

export default UserDashboard;
