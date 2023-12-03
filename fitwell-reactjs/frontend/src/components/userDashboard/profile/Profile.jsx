import React, {useState} from "react";
import "../User_Dashboard.css";
import UserActionService from "../../../services/UserActionService";
import { useSelector, useDispatch } from 'react-redux';
import {userLogin} from "../../../store/slices/userSlice";

const Profile = () => {
  const userDetails= useSelector(state => state.user.userDetails);
  const dispatch = useDispatch()
  const [data, setData]=useState({
    name:userDetails.name,
    DateOfJoin:userDetails.DateOfJoin,
    email:userDetails.email,
    age:userDetails.age,
    gender:userDetails.gender,
    weight:userDetails.weight,
    height:userDetails.height,
    image:userDetails.image,
  })

  const formHandler=(e)=>{
    const {name, value}=e.target;
    data[name]=value;
    setData({...data});
  }

  const handleClickSubmit=async(e)=>{
    e.preventDefault();
    data['_id']=userDetails._id;
    setData({...data});
    const res=await UserActionService.updateProfile(data);
    dispatch(userLogin(res.data));
  }
  return (
    <div class="dashboard-content" id="dashboard-review-page">
      <div class="container">
        <div class="container rounded bg-white mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-3 border-none  mx-5 my-4">
              <div class="d-flex flex-column align-items-center">
                <img
                  class="rounded-sm mt-lg-5"
                  width="200px"
                  height="200px"
                  alt="profilePhoto"
                 src={data.image}
                />
                <h1>
                  <span class="font-weight-bold">
                    {data.name}
                  </span>
                </h1>
                <h2>
                  <span>{data.email}</span>
                </h2>
              </div>
            </div>
            <div class="col-md-5 ">
              <div class="p-3">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h1 class="text-center fa-3x text-xl-center w-100 text-dark p-0 m-0">
                    Profile Settings
                  </h1>
                </div>
                <div class="row mt-1"></div>
                <form onSubmit={handleClickSubmit}>
                  <div class="row">
                    <div class="col-md-12 p-0">
                      <label class="labels m-0">Name</label>
                      <input
                        type="text"
                        name="name"
                        class="w-100 p-2 m-2"
                        style={{ fontSize: "medium", fontWeight: "bold" }}
                        placeholder="Username"
                       value={data.name}
                       onChange={formHandler}
                      />
                    </div>
                    <div class="col-md-12 p-0">
                      <label class="labels m-0">Date Of Join</label>
                      <input
                        type="text"
                        class=" w-100 p-2 m-2"
                        style={{ fontSize: "medium", fontWeight: "bold" }}
                        placeholder="Date of Join"
                        value={data.DateOfJoin}
                        readonly
                      />
                    </div>
                    <div class="col-md-12 p-0">
                      <label class="labels m-0">Age</label>
                      <input
                        type="Number"
                        name="age"
                        class=" w-100 p-2 m-2"
                        style={{ fontSize: "medium", fontWeight: "bold" }}
                        placeholder="Age"
                        value={data.age}
                        onChange={formHandler}
                      />
                    </div>
                    <div class="col-md-12 p-0">
                      <label class="labels m-0">Height</label>
                      <input
                        type="Number"
                        name="height"
                        class=" w-100 p-2 m-2"
                        style={{ fontSize: "medium", fontWeight: "bold" }}
                        placeholder="Height"
                        value={data.height}
                        onChange={formHandler}
                      />
                    </div>
                    <div class="col-md-12 p-0">
                      <label class="labels m-0">Weight</label>
                      <input
                        type="Number"
                        name="weight"
                        class=" w-100 p-2 m-2"
                        style={{ fontSize: "medium", fontWeight: "bold" }}
                        placeholder="Weight"
                        value={data.weight}
                        onChange={formHandler}
                      />
                    </div>
                    <div class="col-md-12 p-0">
                      <label class="labels m-0">
                        Upload New Profile Image URL
                      </label>
                      <input
                        type="text"
                        name="image"
                        class=" w-100 p-2 m-2"
                        style={{ fontSize: "medium", fontWeight: "bold" }}
                        placeholder="Profile Image URL"
                        value={data.image}
                        onChange={formHandler}
                      />
                    </div>
                  </div>
                  <div class="mt-5 text-center">
                    <button
                      class="btn fa-2x btn-primary profile-button"
                      type="submit"
                      style={{ backgroundColor: "orangered" }}
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
