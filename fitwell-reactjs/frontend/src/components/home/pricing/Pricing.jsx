import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    
    <div>
      
        <div class="container1 my-4">
            <div class="title container my-3">
                <h3 id="title-0" class="my-3 ">OUR PLAN</h3>
                <h2 id="title-1" class="my-2"> CHOOSE YOUR PRICING PLAN</h2>
            </div>
            <div class="price-row">
                <div class="price-col">
                    <p>SINGLE CLASS</p>
                    <h2 id="title">Class <br /> Drop-in</h2>
                    <h3 id="pri"> ₹ 4200 </h3>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>No time restriction</li>
                    </ul>
                    <form method="post" action="/userActions/enroll">
                      <input type="text" value="enroll1" class="d-none" name="enrolltype" />
                     <button type="submit" id="enroll1"> ENROLL NOW</button>
                    </form>
                </div>
                <div class="price-col">
                    <p> ADVANCED </p>
                    <h2 id="title">6 Month unlimited</h2>
                    <h3 id="pri">₹ 5770 </h3>
                    <ul> 
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>No time restriction</li>
                    </ul>
                    <form method="post" action="/userActions/enroll">
                        <input type="text" value="enroll2" class="d-none" name="enrolltype"/>
                       <button type="submit" id="enroll"> ENROLL NOW</button>
                    </form>
                </div>
                <div class="price-col">
                    <p>PREMIUM</p>
                    <h2 id="title">12 Month unlimited</h2>
                    <h3 id="pri">₹ 8400</h3>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>No time restriction</li>
                    </ul>
                    <form method="post" action="/userActions/enroll">
                        <input type="text" value="enroll3" class="d-none" name="enrolltype"/>
                       <button type="submit" id="enroll"> ENROLL NOW</button>
                    </form>
                </div>
            </div>
          </div>

    </div>
  )
}

export default Pricing