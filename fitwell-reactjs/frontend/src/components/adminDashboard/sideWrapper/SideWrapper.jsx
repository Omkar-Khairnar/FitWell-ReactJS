import React from 'react'
import '../admin_dashboard.css'
import {Link} from 'react-router-dom'
const SideWrapper = () => {
  return (
    <div class="white" id="sidebar-wrapper">
        <div class="sidebar-heading">
                <Link to="./" class="brand-logo">
                        <img src="./img/Logo/logo1.png" alt="logo" class="logo-img"/>
                </Link>
        </div>
        <div class="list-group list-group-flush my-3">
                <Link to="./admin_dashboard_home"
                        class="list-group-item list-group-item-action bg-transparent text-light active"><i
                                class="fas fa-table-columns bg-transparent"></i>  Dashboard</Link>


                <Link to="./admin_dashboard_trainers"
                        class="list-group-item list-group-item-action bg-transparent text-light  active"><i
                                class="fas fa-user-md me-2"></i>Trainers</Link>

                <Link to="./admin_dashboard_customers"
                        class="list-group-item list-group-item-action bg-transparent text-light  active"><i
                                class="fas fa-users me-2"></i>Customers</Link>

                <Link to="./admin_dashboard_payment"
                        class="list-group-item list-group-item-action bg-transparent text-light fw-bold"><i
                                class="fas fa-chart-line me-2"></i>Payments</Link>

                <Link to="./admin_Dashboard_order"
                        class="list-group-item list-group-item-action bg-transparent text-light fw-bold"><i
                                class="fas fa-shopping-cart me-2"></i>Orders</Link>

                <Link to="./admin_Dashboard_add_product"
                        class="list-group-item list-group-item-action bg-transparent text-light fw-bold"><i
                                class="fas fa-plus me-2"></i>Add New Product</Link>


                <Link to="./admin_dashboard_feedback"
                   class="list-group-item list-group-item-action bg-transparent  text-light fw-bold"><i
                                class="fas fa-comment-dots me-2"></i>Feedbacks</Link>

                <Link to="./" style="margin-top: 60px; border-top: 2px solid rgba(0, 0, 0, 0.247);" class="list-group-item list-group-item-action bg-transparent text-light active"><i
                                class="fas fa-home me-2"></i>Home</Link>
                <Link to="./products" class="list-group-item list-group-item-action bg-transparent text-light active"><i
                                class="fas fa-shopping-cart me-2 bg-transparent"></i>Products</Link>
                                
                <Link to="/" class="list-group-item list-group-item-action bg-transparent text-light  fw-bold"><i
                         class="fas fa-power-off me-2"></i> Logout</Link>
                             
                
        </div>
</div>
  )
}

export default SideWrapper