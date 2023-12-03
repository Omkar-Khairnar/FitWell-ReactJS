import React from "react";
import AdminTopWrapper from "./topWrapper/AdminTopWrapper";
import AdminSideWrapper from "./sideWrapper/AdminSideWrapper";
import {Outlet} from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div class="d-flex" id="wrapper">
      <AdminSideWrapper />
      <div id="page-content-wrapper" style={{color:"black" }}>
        <AdminTopWrapper />

        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
