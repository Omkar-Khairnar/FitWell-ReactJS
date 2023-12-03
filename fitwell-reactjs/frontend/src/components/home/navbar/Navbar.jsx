import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import logo from "../../../assets/img/Logo/logo.png"

const Home = () => {
  return (
    
    <div class="container-fluid container-fluid1">
      <nav class="navbar navbar1 navbar-expand-lg navbar-dark fixed-top bg-black p-0">
      <Link class="navbar-brand navbarlogo" style={{margin:"0%", padding:"0%"}} to="/Home">
        <img class="navbarLogoImg" src={logo} alt="fitwell Logo.png"/>
      </Link>
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse collap " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 navbar-list-items">
          <li class="nav-item nav-item1 mx-2">
            <Link class="nav-link " aria-current="page" to="/Home">HOME</Link>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <Link class="nav-link" to="/AboutUs">ABOUT US</Link>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <Link class="nav-link" to="/Services">SERVICES</Link>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <Link class="nav-link" to="/Products">PRODUCTS</Link>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <Link class="nav-link" to="/Centers">CENTRES</Link>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <Link class="nav-link" to="/Reviews">REVIEWS</Link>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <Link class="nav-link" to="/ContactUS">CONTACT US</Link>
          </li>
        </ul>
      </div>
      {/* <% if(loginStatus==0){ %> */}
        <div class="signinup">
          <ul class="navbar-nav me-auto mb-2 navbar-list-items">
            <li class="nav-item nav-item1 mx-2">
              <Link class="nav-link" to="/UserSignIn">SIGN IN</Link>
            </li>
            <li class="nav-item nav-item1 mx-2">
              <Link class="nav-link" to="/UserSignIn">SIGN UP</Link>
            </li>
          </ul>
        </div>   
      {/* <% } else{ %> */}
        <div class="dropdown">
          <button class="btn dropdown-toggle" style={{color: 'aliceblue', border: 'none'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Account
          </button>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/UserHome">Dashboard</Link></li>
            <li><Link class="dropdown-item" to="/User_Dashboard_cart">Cart</Link></li>
            <li><Link class="dropdown-item" to="/Userlogout">Logout</Link></li>
          </ul>
        </div>
      {/* // <%} %> */}
      


  </nav>
    </div>
  )
}

export default Home