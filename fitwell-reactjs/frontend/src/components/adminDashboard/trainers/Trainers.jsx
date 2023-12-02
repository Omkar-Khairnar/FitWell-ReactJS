import React from 'react';
// import './Trainers.module.css';

const Trainers = () => {
  return (
    <div>
        <div class="container-fluid px-4 overflow-scroll">
            <button type="button" class="button my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add New Trainer
            </button>

            <div class="row my-5">
              <h3 class="fs-4 mb-3">Trainers Information</h3>
              <div class="col">
                <table class="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="50">Sr.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Gender</th>
                      <th scope="col">DOJ</th>
                      <th scope="col" class="text-center">Salary</th> 
                      <th scope="col" class="text-center">Remove Trainer</th> 
                      <th scope="col"></th>

                    </tr>
                  </thead>
                  <tbody>
                    {/* <%let count=1 %>
                    <% trainers.forEach((trainer)=>{ %> */}
                      <tr>
                        <th scope="row">
                          {/* <%=count%> */}
                          </th>
                        {/* <% count=count+1%> */}
                        <td>
                          {/* <%=trainer.name%> */}
                          </td>
                        <td>
                          {/* <%=trainer.email%> */}
                          </td>
                        <td>
                          {/* <%=trainer.gender%> */}
                          </td>
                        <td>
                          {/* <%=trainer.DateOfJoin.toDateString()%> */}
                          </td>
                        <td>
                          {/* <%=trainer.salary%> */}
                          </td>
                        <form method="post" action="/adminactions/deletetrainer">
                          <input type="text" 
                            // value=<%=trainer._id%> 
                            class="d-none" 
                            name="trainerid" />
                          <td> <button type="submit" style={{border: 'none', backgroundColor: 'transparent'}}><i class="fa-solid fa-trash" style={{color:'red', cursor: 'pointer'}}></i></button></td>
                        </form>
                      </tr>
                    {/* <% })%> */}
                  </tbody>
                </table>
              </div>
            </div>
        </div>

          
          <div class="modal" id="exampleModal">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
              <div class="modal-content">
                <div class="modal-header align-self-center">
                  <h3>Fill Out Appropriate Details of Trainer</h3> 
                </div> 
                <div class="modal-body">
                  <div class="form-container sign-up-container">
                    <form name="regform" onchange="return Validation1()" method="POST" action="/adminactions/addTrainer">
                      <fieldset>
                        <input type="text" id="namec" placeholder="Name" name="name" required />
                        <span class="regemailver">Enter Valid Email Address.</span>
                        <input type="text" id="emailc" placeholder="Email" name="email" required />
                        <input type="text" id="genderc" placeholder="Gender" name="gender" required/>
                        <input type="number" id="salary-trainer" placeholder="Enter salary($)" name="salary" required/>
                        <input class="profile-img" type="url" id="image" name="image"
                          placeholder="Enter Profile Image Url"/>
                      </fieldset>
                      <button id="signupbtn" type="submit">Add Trainer</button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
    </div>
  )
}

export default Trainers