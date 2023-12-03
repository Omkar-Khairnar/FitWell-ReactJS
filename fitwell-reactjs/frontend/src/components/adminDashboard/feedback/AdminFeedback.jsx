import React from 'react'
import '../admin_dashboard.css'

const AdminFeedback = () => {
  return (
    <div class="container-fluid px-5 ">
          <div class="tableheader row my-4">
              <h3 class="fs-4 mb-3 text-light py-3" style={{backgroundColor: '#de5923'}}>Users Feedbacks</h3>
              <div class = "tableparent px-5 py-4">
                  <table class="table bg-white rounded shadow-sm  table-hover">
                      <thead>
                          <tr>
                              <th scope="col" width="50">SrNo.</th>
                              {/* <!-- <th scope="col">UID</th> --> */}
                              <th scope="col">UserName</th>
                              <th scope="col">E-Mail</th>
                              <th scope="col">Subject</th>
                              <th scope="col">Message</th>
                              <th scope="col">Contact</th>
                              <th scope="col" class="text-center">Delete Feedback</th>
                              {/* <!-- <th scope="col">Sent On</th> --> */}
                              {/* <!-- <th scope="col">Action</th> --> */}
                          </tr>
                      </thead>
                      <tbody>
                        {/* <%let count=1 %> */}
                        {/* <% feedbacks.forEach((feedback)=>{ %> */}
                          <tr>
                            <th scope="row">
                                {/* <%=count%> */}
                                </th>
                            {/* <% count=count+1%> */}
                            <td>
                                {/* <%=feedback.name%> */}
                                </td>
                            <td>
                                {/* <%=feedback.email%> */}
                                </td>
                            <td>
                                {/* <%=feedback.subject%> */}
                                </td>
                            <td>
                                {/* <%=feedback.message%> */}
                                </td>
                            <td>
                                {/* <%=feedback.phone%> */}
                                </td>
                            <form method="post" action="/adminactions/deletefeedback">
                              <input type="text" 
                            //   value=<%=feedback._id%> 
                              class="d-none" name="feedbackid"/>
                              <td> <button type="submit" style={{border: 'none', backgroundColor: 'transparent'}}><i class="fa-solid fa-trash" style={{color:'red', cursor: 'pointer'}}></i></button></td>
                            </form>

                          </tr>
                        {/* <% })%> */}
                      </tbody>
                  </table> 
              </div>
          </div>

      </div>
  )
}

export default AdminFeedback