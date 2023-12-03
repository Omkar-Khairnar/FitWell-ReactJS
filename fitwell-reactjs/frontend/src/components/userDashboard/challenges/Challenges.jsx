import React from "react";
import "../User_Dashboard.css";

const Challenges = () => {
  return (
    <div>
      <div class="dashboard-content" id="dashboard-challenge-page">
        <h1
          class="challenge-heading"
          style={{ color: "black", fontWeight: "bold" }}
        >
          CHALLENGE YOURSELF
        </h1>
        <div class="container">
          <div class="row row-cols-2 row-cols-md-3 container-fluid">
            {/* <% allChallenges.forEach(function(image){ %> */}
            <div class="col-challenge">
              <div class="card-challenge h-auto bg-dark">
                <button
                  type="button"
                  class="btn challenge-img"
                  // onclick="timerWatch('startBtn<%=image._id%>','stopBtn<%=image._id%>','inputMin<%=image._id%>','inputSec<%=image._id%>','setBtn<%=image._id%>','timer<%=image._id%>')"
                  data-bs-toggle="modal"
                  data-bs-target="#<%=image._id%>"
                >
                  <img
                    src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>"
                    class="card-img-top"
                    alt="p5"
                    id="p5"
                  />
                </button>
                <div class="modal" id="<%=image._id%>">
                  <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                      <div class="modal-header modal-header-userDashboard">
                        <div
                          class="timer"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "55%",
                          }}
                        >
                          <div
                            class="timerCustomizer"
                            style={{ display: "flex" }}
                          >
                            <button
                              class="timerBtnClass startBtn"
                              style={{ backgroundColor: "rgb(0, 248, 0)" }}
                              id="startBtn<%=image._id%>"
                            >
                              Start
                            </button>
                            <button
                              class="timerBtnClass stopBtn"
                              style={{ backgroundColor: "rgb(255, 0, 0)" }}
                              id="stopBtn<%=image._id%>"
                            >
                              Stop
                            </button>
                            <button
                              class="timerBtnClass"
                              style={{
                                backgroundColor: "orange",
                                fontSize: "larger",
                                border: "none",
                                margin: "0px 5px",
                              }}
                              id="setBtn<%=image._id%>"
                            >
                              Set Time
                            </button>
                            <input
                              class="timerInputClass"
                              style={{
                                borderRadius: " 5px",
                                fontSize: "larger",
                                width: "50px",
                                textAlign: "center",
                                padding: "0%",
                                border: "none",
                              }}
                              id="inputMin<%=image._id%>"
                              type="number"
                              value="0"
                              min="0"
                              max="59"
                            />
                            <h3>:</h3>
                            <input
                              class="timerInputClass"
                              style={{
                                borderRadius: " 5px",
                                fontSize: "larger",
                                width: "50px",
                                textAlign: "center",
                                padding: "0%",
                                border: "none",
                              }}
                              id="inputSec<%=image._id%>"
                              type="number"
                              value="0"
                              min="0"
                              max="59"
                            />
                          </div>

                          <h3 id="timerValue" style={{ color: "orangered" }}>
                            Time Left -{" "}
                            <span id="timer<%=image._id%>">0:00</span>
                          </h3>
                        </div>
                        <button
                          type="button"
                          class="button-close"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="challenge-modal-body-border">
                          <img
                            //  src={'data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString("base64)%>'}
                            id="challenge-img-main"
                            alt="challenge1"
                          />
                          <div class="challenge-effects">
                            <div class="challenge-effects-container">
                              <div class="challenge-effect-1">
                                <h2 class="challenge-how-it-work">
                                  ADDRESS OF CHALLENGE
                                </h2>
                                <h5 class="challenge-address-text">
                                  {/* <%= image.description %> */}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <% }) %> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
