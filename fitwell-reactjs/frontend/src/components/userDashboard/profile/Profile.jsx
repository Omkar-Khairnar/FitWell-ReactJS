import React from 'react'
import './.css'

const Profile = () => {
  return (
    <div class="dashboard-content" id="dashboard-review-page">
          <div class="container">
            <div class="container rounded bg-white mb-5">
              <div class="row d-flex justify-content-center">
                  <div class="col-md-3 border-none  mx-5 my-4">
                      <div class="d-flex flex-column align-items-center">
                        <img class="rounded-sm mt-lg-5" width="200px" height="200px" 
                        // src=<%=userDetails.image%>
                        />
                        <h1><span class="font-weight-bold">
                            {/* <%=userDetails.name%> */}
                            </span></h1>
                        <h2><span >
                            {/* <%=userDetails.email%> */}
                            </span></h2>
                      </div>
                  </div>
                  <div class="col-md-5 ">
                      <div class="p-3">
                          <div class="d-flex justify-content-between align-items-center mb-3">
                              <h1 class="text-center fa-3x text-xl-center w-100 text-dark p-0 m-0">Profile Settings</h1>
                          </div>
                          <div class="row mt-1">
                          </div>
                          <form action="/useractions/updateprofile" method="post">
                            <div class="row">
                              <div class="col-md-12 p-0">
                                <label class="labels m-0">Name</label>
                                <input type="text" name="name" class="w-100 p-2 m-2" style="font-size: medium; font-weight: bold;" placeholder="Username" 
                                // value=<%=userDetails.name%>
                                />
                              </div> 
                                <div class="col-md-12 p-0">
                                  <label class="labels m-0">Date Of Join</label>
                                  <input type="text" class=" w-100 p-2 m-2" style="font-size: medium; font-weight: bold;" placeholder="Date of Join" 
                                //   value=<%=userDetails.DateOfJoin %> 
                                  readonly/>
                                </div>
                                <div class="col-md-12 p-0">
                                  <label class="labels m-0">Age</label>
                                  <input type="Number" name="age" class=" w-100 p-2 m-2" style="font-size: medium; font-weight: bold;" placeholder="Age" 
                                //   value=<%=userDetails.age%>
                                  />
                                </div>
                                <div class="col-md-12 p-0">
                                  <label class="labels m-0">Height</label>
                                  <input type="Number" name="height" class=" w-100 p-2 m-2" style="font-size: medium; font-weight: bold;" placeholder="Height" 
                                //   value=<%=userDetails.height%>
                                  />
                                </div>
                                <div class="col-md-12 p-0">
                                  <label class="labels m-0">Weight</label>
                                  <input type="Number" name="weight" class=" w-100 p-2 m-2" style="font-size: medium; font-weight: bold;" placeholder="Weight" 
                                //   value=<%=userDetails.weight%>
                                  />
                                </div>
                                <div class="col-md-12 p-0">
                                  <label class="labels m-0">Upload New Profile Image URL</label>
                                  <input type="text" name="image" class=" w-100 p-2 m-2" style="font-size: medium; font-weight: bold;" placeholder="Profile Image URL" 
                                //   value=<%=userDetails.image%>
                                  />
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                              <button class="btn fa-2x btn-primary profile-button" type="submit" style="background-color: orangered;">Update Profile</button>
                            </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Profile