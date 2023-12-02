import React from "react";
import "./ContactUS.css";
import ContactUsValidateForm from "./ContactUsFormValidate";
import Centers from "../centers/Centers";

const ContactUS = () => {
  return (
    <div style={{padding : "0vw", margin:"0vw"}}>
      <div class="containerContactUs">
        <h1>CONNECT WITH US</h1>
        <br />
        <p style={{ color: "white" , textAlign:"center"}}>
          We would love to respond to your queries and help you succeed
          <br />
          Feel free to get in touch with us
        </p>
        <div class="contact-box">
          <div class="contact-left">
            <h3>Tell us about you</h3>

            <form
              className="contactUsForm"
              name="contact"
              method="post"
              action="/useractions/contactus"
              // onsubmit={ContactUsValidateForm()}
            >
              <div class="input-row">
                <div class="input-group">
                  <label>Name</label>
                  <input
                    type="text" class="contactUsInputText"
                    placeholder="Enter Your Name"
                    name="name"
                  />
                </div>
                <div class="input-group">
                  <label>Phone</label>
                  <input
                    type="text" class="contactUsInputText"
                    placeholder="Enter Contact No."
                    name="phone"
                  />
                </div>
              </div>
              <div class="input-row">
                <div class="input-group">
                  <label>Email</label>
                  <input
                    type="text" class="contactUsInputText"
                    placeholder="Enter email address"
                    name="email"
                  />
                </div>
                <div class="input-group">
                  <label>Subject</label>
                  <input
                    type="text" class="contactUsInputText"
                    placeholder="Enter Subject"
                    name="subject"
                  />
                </div>
              </div>
              <label style={{textAlign : 'center', color:'orangered'}}>Message</label>
              <textarea
                rows="5"
                class="contactUsTextarea"
                placeholder="What's on your mind"
                name="message"
              ></textarea>

              <button class="contactUsSubmit" type="submit">Send</button>
            </form>
          </div>

          <div class="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tr className="contactUsTR">
                <td className="contactUsTD">Email</td>
                <td className="contactUsTD">fitwell@gmail.com</td>
              </tr>

              <tr className="contactUsTR">
                <td className="contactUsTD">Phone</td>
                <td className="contactUsTD">+91 7865******</td>
              </tr>

              <tr className="contactUsTR">
                <td className="contactUsTD">Address</td>
                <td className="contactUsTD">
                  603 , Gnan Marg , SriCity
                  <br />
                  Some layout , Some Road , Sricity
                  <br />
                  Andhra Pradesh 517645
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="map-container">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15514.697289831118!2d80.0268804!3d13.5555593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadb0842ffc2719e4!2sIndian+Institute+of+Information+Technology!5e0!3m2!1sen!2sin!4v1519365333651"
            height="500"
            style={{ border: "0" }}
            title="Gym Location"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
