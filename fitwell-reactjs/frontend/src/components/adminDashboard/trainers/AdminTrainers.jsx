import React, { useEffect, useState } from "react";
import './AdminTrainerForm.css';
import LoaderComp from "../../Loader";
const AdminActions = require("../../../services/AdminActions");


const AdminTrainers = (props) => {
  const {setmyAlert} = props;
  const [isLoading, setIsLoading] = useState(false)
  const [trainers, setTrainers] = useState(null);
  let count = 1;
  const getAllTrainerList = async () => {
    setIsLoading(true)
    const res = await AdminActions.getAllAdminTrainerList();
    if (!res.error && res.data.length > 0) {
      setTrainers(res.data);
    }
    setIsLoading(false);
  };
  console.log(
    "🚀 ~ file: AdminTrainers.jsx:11 ~ AdminTrainers ~ trainers:",
    trainers
  );

  const handleDeleteTrainer =async(trainerid)=>{
    setIsLoading(true)
    const res = await AdminActions.deleteTrainer({trainerid});
    if(!res.error){
      setmyAlert(res.msg, 'success');
      getAllTrainerList();
    }
    else{
      setmyAlert(res.msg, 'error')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getAllTrainerList();
  }, []);

  return (
    <div>
      <div class="container-fluid px-4 overflow-scroll">
        <button
          class="button adminTrainerButton my-2"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalAddTrainer"
        >
          Add New Trainer
        </button>

        <div class="row my-5">
          <h3 class="fs-4 mb-3">Trainers Information</h3>
          {
            isLoading ? (
              <LoaderComp/>
            ) : (
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
                    <th scope="col">
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
                         
                            <button
                              className="deleteTrainerButton"
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                                padding: "auto",
                              }}
                              onClick={()=>{handleDeleteTrainer(item._id)}}
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
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            )

          }
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
                        <span class="adminTrainerSpan">Enter Valid Email Address.</span>
                        <input class="addTrainerFormInput" type="email" id="emailc" placeholder="Email" name="email" required />
                        <input class="addTrainerFormInput" type="text" id="genderc" placeholder="Gender" name="gender" required/>
                        <input class="addTrainerFormInput" type="number" id="salary-trainer" placeholder="Enter salary" name="salary" required/>
                        <input class="addTrainerFormInput" type="url" id="image" name="image"
                          placeholder="Enter Profile Image Url"/>
                      </fieldset>
                      <button class="btnSubmitTrainers" id="signupbtn" type="submit">Add Trainer</button>
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
