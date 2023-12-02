import React from "react";
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div>
      <div class="ourteam-firstline">OUR TEAM</div>
      <div class="ourteam-secondline">TRAIN WITH OUR EXPERTS</div>

      <div class="productsSection">
        <div class="row row-cols-2 row-cols-md-4 g-3">
          {/* <%trainers.forEach((item)=>{ %>  */}
          <div class="col">
            <div class="card h-auto bg-dark">
              <div class="decs-container">
                {/* <img src=<%=item.image%> class="card-img-top" alt="p1" id="p1"> */}
              </div>
              <div
                class="card-foot"
                style={{ paddingLeft: "0%", paddingRight: "0%" }}
              >
                {/* <h4 class="teamMateName"><%=item.name%></h4> */}
                <p class="teamJOb">Gym Trainer</p>
              </div>
            </div>
          </div>
          {/* <% })  %>  */}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
