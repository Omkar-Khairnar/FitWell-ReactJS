import React from "react";

const Workouts = () => {
  return (
    <div>
      <div class="dashboard-content" id="dashboard-workout-page">
        <h1
          class="Workout-heading"
          style={{ color: "black", fontWeight: "bold" }}
        >
          MUST TRY THESE HOME WORKOUTS...
        </h1>
        <div class="container">
          <div class="row row-cols-2 row-cols-md-3 container-fluid">
            {/* <% allWorkouts.forEach(function(image) { %> */}
            <div class="col-workout">
              <div class="card-workout h-auto bg-dark">
                <button
                  type="button"
                  class="btn challenge-img"
                  // onclick="timerWatch('startBtn<%=image._id%>','stopBtn<%=image._id%>','inputMin<%=image._id%>','inputSec<%=image._id%>','setBtn<%=image._id%>','timer<%=image._id%>')"
                  data-bs-toggle="modal"
                  data-bs-target="#<%=image._id%>"
                >
                  <img
                    // src="data:image/<%=image.img.img0.contentType%>;base64, <%=image.img.img0.data.toString('base64')%>"
                    class="card-img-top"
                    alt="p5"
                    id="p5"
                  />
                </button>
                <div class="modal" id="<%=image._id%>">
                  <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                      <div class="modal-header">
                        <div class="timer">
                          <div class="timerCustomizer">
                            <button
                              class="timerBtnClass startBtn"
                              id="startBtn<%=image._id%>"
                            >
                              Start
                            </button>
                            <button
                              class="timerBtnClass stopBtn"
                              id="stopBtn<%=image._id%>"
                            >
                              Stop
                            </button>
                            <button
                              class="timerBtnClass"
                              id="setBtn<%=image._id%>"
                            >
                              Set Time
                            </button>
                            <input
                              class="timerInputClass"
                              id="inputMin<%=image._id%>"
                              type="number"
                              value="0"
                              min="0"
                              max="59"
                            />
                            <h3>:</h3>
                            <input
                              class="timerInputClass"
                              id="inputSec<%=image._id%>"
                              type="number"
                              value="0"
                              min="0"
                              max="59"
                            />
                          </div>

                          <h3 id="timerValue">
                            Time Left -
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
                        <div class="workout-modal-body-border">
                          <img
                            // src="data:image/<%=image.img.img0.contentType%>;base64, <%=image.img.img0.data.toString('base64')%>"
                            id="workout-img-main"
                            alt="workout1"
                          />
                          <div class="workout-effects">
                            <div class="workout-effects-container">
                              <div class="workout-effect-1">
                                <h2 class="workout-how-it-work">
                                  HOW IT WORKS
                                </h2>
                                <img
                                  // src="data:image/<%=image.img.img1.contentType%>;base64, <%=image.img.img1.data.toString('base64')%>"
                                  id="workout-effects-1"
                                  alt="workout1.1"
                                  // id="workout-effects-1.1"
                                />
                              </div>
                              <div class="workout-effect-234">
                                <img
                                  // src="data:image/<%=image.img.img2.contentType%>;base64, <%=image.img.img2.data.toString('base64')%>"
                                  alt="workout1.2"
                                  id="workout-effects-2"
                                />
                                <img
                                  // src="data:image/<%=image.img.img3.contentType%>;base64, <%=image.img.img3.data.toString('base64')%>"
                                  alt="workout1.3"
                                  id="workout-effects-3"
                                />
                                <img
                                  // src="data:image/<%=image.img.img4.contentType%>;base64, <%=image.img.img4.data.toString('base64')%>"
                                  alt="workout1.4"
                                  id="workout-effects-4"
                                />
                              </div>
                            </div>
                            <div class="workout-effect-explain">
                              <h5>{/* <%=image.description%> */}</h5>
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

export default Workouts;