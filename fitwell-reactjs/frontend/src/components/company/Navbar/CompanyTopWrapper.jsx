import React from 'react'
// import '../company.css'
import {Link} from 'react-router-dom'
const CompanyTopWrapper = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
  <div class="d-flex align-items-center">
    <i style={{color: '#de5923'}} class="fas fa-align-left  fs-4 me-3" id="menu-toggle"></i>
    <h3 class="fs-2 m-0">Company Dashboard</h3>
  </div>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle second-text fw-bold" to="#" id="navbarDropdown" role="button"
          data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration : "none"}}>
          <i class="fas fa-user me-2"></i><span id="admin-dashboard-username" style={{fontSize : "20px", color : "black"}}>Aarogya Suppliments</span>
        </Link>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link class="dropdown-item" to="/">Logout</Link></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default CompanyTopWrapper