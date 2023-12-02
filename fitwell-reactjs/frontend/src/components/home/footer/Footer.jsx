import React, { useState } from 'react'
import './Footer.css'
import logo from "../../../assets/img/Logo/logo.png"


const Footer = () => {

  const [date] = useState(new Date().getFullYear());

  return (

    
      <div class="footercontainer">
        <div class="info">
            <div class="infoBox">
                <a class="icon" href="https://goo.gl/maps/cf9CjEf7qd3BM5sx6">
                    <i class="fa-sharp fa-solid fa-location-dot fa-2xl"></i>
                </a>
                <div class="iconinfo">
                    <p>IIIT Sri City, Tirupati district, Andhra Pradesh, India</p>
                </div>
            </div>

            <div class="infoBox">
                <div class="icon">
                    <i class="fa-solid fa-phone fa-2xl"></i>
                </div>
                <div class="iconinfo">
                    <p>+91 7865******</p>
                </div>
            </div>
            <div class="infoBox">
                <div class="icon">
                    <i class="fa-solid fa-envelope fa-2xl"></i>
                </div>
                <div class="iconinfo">
                    <p>	fitwell@gmail.com</p>
                </div>
            </div>

        </div>


        <div class="footInfo">
            <div class="block block1">
                <div class="head">
                    <img src={logo} alt="" />
                </div>
                <div class="icons">
                    <a class="icon"  href="https://www.instagram.com/iiitsricity/"><i
                            class="fa-brands fa-instagram"></i></a>
                    <a class="icon"  href="https://www.facebook.com/IIIT.SriCity/"><i
                            class="fa-brands fa-facebook"></i></a>
                    <a class="icon"  href="https://twitter.com/IIITSC"><i class="fa-brands fa-twitter"></i></a>
                    <a class="icon" 
                        href="https://in.linkedin.com/school/indian-institute-of-information-technology-sricity/"><i
                            class="fa-brands fa-linkedin"></i></a>
                </div>


            </div>
            <div class="block">
                <div class="head">
                    <h2>UseFul Links</h2>
                </div>
                <ul>
                    <li><a href="./about">About Us</a></li>
                    <li><a href="./contact">Contact Us</a></li>
                    <li><a href="./reviews">Blogs</a></li>

                </ul>
            </div>
            <div class="block">
                <div class="head">
                    <h2>Member</h2>
                </div>
                <ul>
                    <li><a href="./signin">Login</a></li>
                    <li><a href="./signup">Sign Up</a></li>
                </ul>
            </div>
            <div class="block">
                <div class="head">
                    <h2>Admin</h2>
                </div>
                <ul>
                    <li><a href="./adminlogin">Login</a></li>
                    <li><a href="./admin_dashboard_home">Admin Dashboard</a></li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <footer>&copy; Copyrights @ <span id="date">{date}</span> All rights reserved.</footer>
        </div>
    </div>

    
  )
}

export default Footer