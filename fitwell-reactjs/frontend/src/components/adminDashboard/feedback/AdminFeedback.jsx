import React, { useEffect, useState } from "react";
import "../admin_dashboard.css";
import AdminActions from "../../../services/AdminActions";

const AdminFeedback = () => {
  const [feedbacks, setFeedbacks] = useState(null);
  const getAllFeedbacks = async () => {
    const res = await AdminActions.getAllAdminFeedback();
    if (!res.error && res.data.length > 0) {
      setFeedbacks(res.data);
    }
  };

  console.log(
    "🚀 ~ file: AdminFeedback.jsx:8 ~ AdminFeedback ~ feedbacks:",
    feedbacks
  );
  useEffect(() => {
    getAllFeedbacks();
  }, []);
  let count = 1;

  return (
    <div class="container-fluid px-5 ">
      <div class="tableheader row my-4">
        <h3
          class="fs-4 mb-3 text-light py-3"
          style={{ backgroundColor: "#de5923" }}
        >
          Users Feedbacks
        </h3>
        <div class="tableparent px-5 py-4">
          <table class="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col" width="50">
                  SrNo.
                </th>
                {/* <!-- <th scope="col">UID</th> --> */}
                <th scope="col">UserName</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
                <th scope="col">Contact</th>
                <th scope="col" class="text-center">
                  Delete Feedback
                </th>
                {/* <!-- <th scope="col">Sent On</th> --> */}
                {/* <!-- <th scope="col">Action</th> --> */}
              </tr>
            </thead>
            <tbody>
              {feedbacks !== null && feedbacks.length > 0 && 
              feedbacks.map((item) => (
              <tr>
                <th scope="row">{count++}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
                <td>{item.phone}</td>
                  <td style={{padding : "0%"}}>
                <form method="post" action="/adminactions/deletefeedback" style={{padding : "0%"}}>
                  <input
                    type="text"
                    value={item._id}
                    class="d-none"
                    name="feedbackid"
                  />
                    <button
                      type="submit"
                      style={{ border: "none", backgroundColor: "transparent", padding : "auto" }}
                    >
                      <i
                        class="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer", padding : 'auto'}}
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
  );
};

export default AdminFeedback;
