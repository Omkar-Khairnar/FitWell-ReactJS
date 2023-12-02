import React from "react";
import logo from "../../../assets/img/Logo/logo.png"

const UserNavbar = () => {
  return (
    <div class="dashboard-nav">
      <div class="top" style={{ height: "100%" }}>
        <div class="d-flex flex-column justify-content-between">
          <header>
            <a href="#" class="menu-toggle">
              <i class="fas fa-bars"></i>
            </a>
            <div class="brand-logo-img">
              <a href="./" class="brand-logo">
                <img src={logo} alt="logo" class="logo-img" />
              </a>
            </div>
          </header>
          <nav class="dashboard-nav-list my-4">
            <a href="./user_Dashboard_home" class="dashboard-nav-item">
              <i class="fas fa-dashboard bg-transparent"></i>
              Dashboard
            </a>

            <a href="./user_Dashboard_profile" class="dashboard-nav-item">
              <i class="fas fa-user bg-transparent"></i>
              Profile
            </a>
            <a href="./user_dashboard_workout" class="dashboard-nav-item">
              <i class="fas fa-dumbbell bg-transparent"></i>
              Home WorkOut
            </a>
            <a href="./user_Dashboard_challenges" class="dashboard-nav-item">
              <i class="fas fa-running bg-transparent"></i>
              Challenges
            </a>
            {/* <a href="./user_dashboard_chat" class="dashboard-nav-item">
                    <i class="fas fa-users bg-transparent"></i>
                    Chat with us
                </a>  */}
            <a href="./user_Dashboard_reviews" class="dashboard-nav-item">
              <i class="fas fa-comment bg-transparent"></i>
              Put a Review
            </a>

            <a href="./user_Dashboard_cart" class="dashboard-nav-item">
              <i class="fas fa-shopping-cart bg-transparent"></i>
              Cart
            </a>
            <a href="./user_dashboard_myorders" class="dashboard-nav-item">
              <i class="fas fa-bag-shopping bg-transparent"></i>
              Your Orders
            </a>
            <a href="./user_Dashboard_payment" class="dashboard-nav-item">
              <i class="fas fa-money-check-alt bg-transparent"></i>
              Payment
            </a>
          </nav>
        </div>

        <nav
          style={{
            position: "absolute",
            bottom: "0",
            borderTop: "2px solid rgba(161, 51, 0, 0.959)",
            width: "100%",
          }}
        >
          <a href="./" class="dashboard-nav-item">
            <i class="fas fa-home bg-transparent"></i>
            Home
          </a>
          <a href="./products" class="dashboard-nav-item">
            <i class="fas fa-shopping-cart bg-transparent"></i>
            Products
          </a>
        </nav>
      </div>
    </div>
  );
};

export default UserNavbar;
