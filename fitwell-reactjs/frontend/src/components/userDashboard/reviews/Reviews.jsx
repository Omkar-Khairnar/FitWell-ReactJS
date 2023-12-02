import React from 'react'
import './.css'

const Reviews = () => {
  return (
    <div class="dashboard-content" id="dashboard-review-page">
        <div class="container">
          <div class="container-review">
            <h1>Leave a Review</h1>
            <form id="review-form" method="post" action="/useractions/putreview">
              <label for="comment">Comment:</label>
              <textarea id="comment" name="comment" rows="5" required ></textarea>
              
              <label for="rating">Rating:</label> 
              <select id="rating" name="rating" required>
                <option id="rating" value="">
                  Select
                </option>
                <option id="star" value="5">* * * * *</option>
                <option id="star" value="4">* * * *</option>
                <option id="star" value="3">* * *</option>
                <option id="star" value="2">* *</option>
                <option id="star" value="1">*</option>
              </select>
              <div class="review-submit">
              <input class="submit-review" type="submit" value="Submit"/>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Reviews