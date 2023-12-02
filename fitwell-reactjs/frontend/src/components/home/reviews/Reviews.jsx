import React from 'react';
import './Reviews.css';
import ReviewSlide from "../../../assets/img/customer_feedback.jpg";


const Reviews = () => {
  return (
    <div>
          <div class="topbg">
        <img src={ReviewSlide} alt="" srcset=""/>
        <div class="toptitle">
            REVIEWS
        </div> 
    </div>


<section id="testim" class="testim"> 
                <div class="wrap">
                    <span id="right-arrow" class="arrow right fa fa-chevron-right"></span>
                    <span id="left-arrow" class="arrow left fa fa-chevron-left "></span>
                    <ul id="testim-dots" class="dots">
                        {/* <% reviews.forEach((review)=>{ %> */}
                            <li class="dot "></li>
                        {/* <% }) %> */}
                    </ul>
                    <div id="testim-content" class="cont">
                     {/* <% reviews.forEach((review)=>{ %> */}
                        <div class="active">
                            <div class="img">
                              <img 
                              // src=<%=review.image%> 
                              alt=""
                              />

                              </div>
                            {/* <h2><%=review.name%></h2> */}
                            {/* <p><%=review.comment%></p> */}
                        </div>
                     {/* <% }) %> */}
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Reviews