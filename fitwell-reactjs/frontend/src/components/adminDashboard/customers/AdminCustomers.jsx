import React from 'react'
import '../admin_dashboard.css'


const AdminCustomers = () => {
  return (
    <div class="container-fluid px-4 overflow-scroll">
              <div class="row my-5">
                <h3 class="fs-4 mb-3">Total Members</h3>
                <div class="col">
                  <table class="table bg-white rounded shadow-sm  table-hover">
                    <thead>
                      <tr>
                        <th scope="col" width="50">Sr.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOJ</th> 
                        <th scope="col">Gender</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Height</th>
                        <th scope="col">Remove</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {/* <%let count=1 %> */}
                      {/* <% users.forEach((user)=>{ %> */}
                        <tr>
                          <th scope="row">
                            {/* <%=count%> */}
                            </th>
                          {/* <% count=count+1%> */}
                          <td>
                            {/* <%=user.name%> */}
                            </td>
                          <td>
                            {/* <%=user.email%> */}
                            </td>
                          <td>
                            {/* <%=user.DateOfJoin%> */}
                            </td>
                          <td>
                            {/* <%=user.gender%> */}
                            </td>
                          <td>
                            {/* <%=user.weight%> */}
                            </td>
                          <td>
                            {/* <%=user.height%> */}
                            </td>
                          <form method="post" action="/adminactions/deleteuser">
                            <input type="text" 
                            // value=<%=user.id%> 
                            class="d-none" name="userid"/>
                            <td> <button type="submit" style={{border: 'none', backgroundColor: 'transparent'}}><i class="fa-solid fa-trash" style={{color: 'red' , cursor: 'pointer'}}></i></button></td>
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

export default AdminCustomers