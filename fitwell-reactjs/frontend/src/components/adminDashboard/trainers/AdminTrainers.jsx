import React, { useEffect, useState } from "react";

import './AdminTrainerForm.css';
const AdminActions = require("../../../services/AdminActions");
// import './Trainers.css';

const AdminTrainers = () => {
  const [trainers, setTrainers] = useState(null);
  let count = 1;
  const getAllTrainerList = async () => {
    const res = await AdminActions.getAllAdminTrainerList();
    if (!res.error && res.data.length > 0) {
      setTrainers(res.data);
    }
  };
  console.log(
    "🚀 ~ file: AdminTrainers.jsx:11 ~ AdminTrainers ~ trainers:",
    trainers
  );

  useEffect(() => {
    getAllTrainerList();
  }, []);

  return (
    <div>
      <div class="container-fluid px-4 overflow-scroll">
        <button
          className="adminTrainerButton"
          type="button"
          class="button my-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalAddTrainer"
        >
          Add New Trainer
        </button>

        <div class="row my-5">
          <h3 class="fs-4 mb-3">Trainers Information</h3>
          <div class="col">
            <table class="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col" width="50">
                    Sr.
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">DOJ</th>
                  <th scope="col" class="text-center">
                    Salary
                  </th>
                  <th scope="col" class="text-center">
                    Remove Trainer
                  </th>
                </tr>
              </thead>
              <tbody>
                {trainers !== null &&
                  trainers.length > 0 &&
                  trainers.map((item) => (
                    <tr>
                      <th scope="row">{count++}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.DateOfJoin}</td>
                      <td>{item.salary}</td>
                      <td style={{ padding: "0%" }}>
                        <form
                          class="adminTrainerForm"
                          method="post"
                          action="/adminactions/deletetrainer"
                          style={{ padding: "0%" }}
                        >
                          <input
                            type="text"
                            value={item._id}
                            class="d-none"
                            name="trainerid"
                          />
                          <button
                            className="adminTrainerButton"
                            type="submit"
                            style={{
                              border: "none",
                              backgroundColor: "transparent",
                              padding: "auto",
                            }}
                          >
                            <i
                              class="fa-solid fa-trash"
                              style={{
                                color: "red",
                                cursor: "pointer",
                                padding: "auto",
                              }}
                            ></i>
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="modal" id="exampleModalAddTrainer">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
              <div class="modal-content">
                <div class="modal-header adminModalHeader align-self-center">
                  <h2 style={{fontWeight : 'bold'}}>Fill Out Appropriate Details of Trainer</h2> 
                </div> 
                <div class="modal-body" style={{backgroundColor : "white", color : "black"}}>
                  <div class="form-container" >
                    <form class="adminAddTrainerForm" name="regform" onchange="return Validation1()" method="POST" action="/adminactions/addTrainer">
                      <fieldset>
                        <input class="addTrainerFormInput"  type="text" id="namec" placeholder="Name" name="name" required />
                        <span class="regemailver adminTrainerSpan">Enter Valid Email Address.</span>
                        <input class="addTrainerFormInput" type="text" id="emailc" placeholder="Email" name="email" required />
                        <input class="addTrainerFormInput" type="text" id="genderc" placeholder="Gender" name="gender" required/>
                        <input class="addTrainerFormInput" type="number" id="salary-trainer" placeholder="Enter salary" name="salary" required/>
                        <input class="addTrainerFormInput" type="url" id="image" name="image"
                          placeholder="Enter Profile Image Url"/>
                      </fieldset>
                      <button class="btnSubmitTrainers adminTrainerButton" id="signupbtn" type="submit">Add Trainer</button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
    </div>
  );
};

export default AdminTrainers;
