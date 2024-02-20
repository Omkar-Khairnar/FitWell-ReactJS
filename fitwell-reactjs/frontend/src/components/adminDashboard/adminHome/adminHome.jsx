import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import "../admin_dashboard.css";
import AdminActions from "../../../services/AdminActions";

const AdminHome = () => {
  const [payments, setPayments] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const getAllPayments = async () => {
    const res = await AdminActions.getAllAdminPayment();
    if (!res.error && res.data.adminPaymentsHome.length > 0) {
      setPayments(res.data.adminPaymentsHome);
    }

    if (!res.error && res.data.totalamount > 0) {
      setRevenue(res.data.totalamount);
    }
  };


  useEffect(() => {
    getAllPayments();
  }, []);

  const [orders, setOrders] = useState(null);
  const [ordersCount, setOrdersCount] = useState(null);

  const getAllOrders = async () => {
    const res = await AdminActions.getAllAdminOrder();
    if (!res.error && res.data.adminOrdersHome.length > 0) {
      setOrders(res.data.adminOrdersHome);
    }
    if (!res.error && res.data.totalOrders > 0) {
      setOrdersCount(res.data.totalOrders);
    }
    else{
      console.log(res.msg);
    }
  };
  useEffect(() => {
    getAllOrders();
  }, []);

  const [trainersCount, setTrainersCount] = useState(null);
  const getAllTrainerCount = async () => {
    const res = await AdminActions.getAllAdminTrainerList();
    if (!res.error && res.data.length > 0) {
      setTrainersCount(res.data.length);
    }
  };


  useEffect(() => {
    getAllTrainerCount();
  }, []);

  const [customersCount, setCustomersCount] = useState(null);
  const getAllCustomersCount = async () => {
    const res = await AdminActions.getAllAdminCustomer();
    if (!res.error && res.data.length > 0) {
      setCustomersCount(res.data.length);
    }
  };


  useEffect(() => {
    getAllCustomersCount();
  }, []);

  return (
    <div class="container-fluid">
      <div class="row g-3 my-2">
        <div class="col-md-3">
          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 class="fs-2">{trainersCount}</h3>
              <p class="fs-5">Trainers</p>
            </div>
            <i class="fas fa-user-friends fs-1 primary-text border rounded-full secondary-bg p-3"></i>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 class="fs-2">{customersCount}</h3>
              <p class="fs-5">Clients</p>
            </div>
            <i class="fas fa-user-friends fs-1 primary-text border rounded-full secondary-bg p-3"></i>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 class="fs-2">{ordersCount}</h3>
              <p class="fs-5">Orders</p>
            </div>
            <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 class="fs-2">
                Rs.
                {revenue}
              </h3>
              <p class="fs-5">Total Revenue</p>
            </div>
            <i class="fas fa-money-bill-wave fs-1 primary-text border rounded-full secondary-bg p-3"></i>
          </div>
        </div>
      </div>

      <div class="challenge-workout my-4 d-flex justify-content-evenly">
        <button
          type="button"
          class="buttonAdminHome button   my-2"
          data-bs-toggle="modal"
          data-bs-target="#addChallenge"
        >
          Add New Challenge
        </button>
        <button
          type="button"
          class="buttonAdminHome button   my-2"
          data-bs-toggle="modal"
          data-bs-target="#addWorkout"
        >
          Add New Workout
        </button>
      </div>

      <div class="modal" id="addChallenge">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header adminModalHeader align-self-center">
              <h3>Enter New Challenge</h3>
            </div>
            <div class="modal-body bg-white">
              <div class="form-container add-challenge-container">
                <form
                  class="AdminHomeForm"
                  name="addNewChallenge"
                  action="/adminActions/newChallenge"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <label for="description">Description of Challenge</label>
                  <textarea
                    class="workoutFormText"
                    type="text"
                    id="description"
                    placeholder="Enter Description of Challenge"
                    name="ChallengeDescription"
                    required
                  ></textarea>
                  <label for="challengeImg">Upload Image of Challenge.</label>
                  <input
                    class="product-img"
                    type="file"
                    id="challengeImg"
                    name="challengeImg"
                    placeholder="Upload Image"
                    required
                  />
                  <button
                    id="add-challenge-btn"
                    class="buttonAdminHome addChallengeAdminHomeBtn"
                    type="submit"
                  >
                    Add Challenge
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="addWorkout">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header adminModalHeader align-self-center">
              <h3>Enter New Workout</h3>
            </div>
            <div class="modal-body bg-white">
              <div class="form-container add-workout-container">
                <form
                  class="AdminHomeForm"
                  name="addNewWorkout"
                  action="/adminactions/newWorkout"
                  method="POST"
                  enctype="multipart/form-data"
                >
                  <label for="description">Description of Workout</label>
                  <textarea
                    className="workoutFormText"
                    type="text"
                    id="description"
                    placeholder="Enter Description of new Workout"
                    name="WorkoutDescription"
                    required
                  ></textarea>
                  <label for="workoutImg">Upload 5 Images of Workout.</label>
                  <input
                    class="product-img"
                    multiple
                    type="file"
                    id="workoutImg"
                    name="workoutImg"
                    placeholder="Upload Image"
                    required
                  />
                  <button id="add-workout-btn" type="submit" className="buttonAdminHome">
                    Add Workout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="recent-payment-conrainer">
        <div class="recent-5-Payments my-5">
          <h3>Recent Payment</h3>
          <div class="col">
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Transaction ID</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments !== null &&
                  payments.length > 0 &&
                  payments.map((item, key) => (
                    <tr id="row1">
                      <td id="payment-date1">{item.Dateoforder}</td>
                      <td id="payment-transactionID1">{item._id}</td>
                      <td id="payment-Method1">{item.paymentmethod}</td>
                      <td id="payment-desc1">{item.description}</td>
                      <td id="payment-amount1">
                        Rs
                        {item.amount}
                      </td>
                      <td id="payment-status1">{item.status}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="recent-order-conrainer">
        <div class="recent-5-orders my-5">
          <h3>Recent order</h3>
          <div class="col">
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col" width="50">
                    Sr.
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">DateOfOrder</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                {orders !== null &&
                  orders.length > 0 &&
                  orders.map((item, key) => (
                    <tr>
                      <th scope="row">{key + 1}</th>
                      <td>{item.product.name}</td>
                      <td>{item.Dateoforder}</td>
                      <td>{item.amount}</td>
                      <td>{item.status}</td>
                      <td>{item.address}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
