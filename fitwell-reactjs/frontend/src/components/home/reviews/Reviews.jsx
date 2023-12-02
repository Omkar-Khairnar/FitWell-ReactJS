import React, { useEffect, useState } from "react";
import "./Reviews.css";
import ReviewSlide from "../../../assets/img/customer_feedback.jpg";
import ReviewService from "../../../services/ReviewService";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [idx, setIdx]=useState(0);
  //Getting All Reviews
  const getReviews = async () => {
    const res = await ReviewService.getAllReviews();
    if (!res.error && res.data !== undefined) {
      setReviews(res.data);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  setInterval(()=>{
    if(idx >= reviews.length){
      setIdx(0);
    }
    else{
      setIdx(idx+1);
    }
  },[5000])



  const setLeftIdx=()=>{setIdx(idx-1)}
  const setRightIdx=()=>{setIdx(idx+1)}

  return (
    <div>
      <div className="topbg">
        <img src={ReviewSlide} alt="" srcset="" />
        <div className="toptitle">REVIEWS</div>
      </div>

      <section id="testim" className="testim">
        <div className="wrap">
          <span
            id="right-arrow"
            className="arrow right fa fa-chevron-right"
            onClick={setRightIdx}
          ></span>
          <span
            id="left-arrow"
            className="arrow left fa fa-chevron-left "
            onClick={setLeftIdx}
          ></span>
          <ul id="testim-dots" className="dots">
            {reviews.length > 0 &&
              reviews.map((review, index) => (
                <li key={index} className={`${idx === index ? 'active dot' : 'dot'}`}></li>
              ))}
          </ul>
          <div id="testim-content" className="cont">
            {reviews !== null &&
              reviews.length > 0 &&
              reviews.map((review, index) => (
                <div className={`${idx === index ? 'active' : ''}`}>
                  <div className="img">
                    <img src={review.image} alt="" />
                  </div>
                  <h2>{review.name}</h2>
                  <p>{review.comment}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
