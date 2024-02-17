import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin, addAuthtoken } from "../../store/slices/userSlice";
import LoaderComp from "../Loader";

function SignUpForm(props) {
  const {setmyAlert} = props;
  const initialState = {
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    image: "",
  };
  const [state, setState] = useState(initialState);
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    setIsloading(true);
    evt.preventDefault();
    const res = await UserService.createUser(state);
    if (!res.error) {
      alert(res.msg);
      setState(initialState);
      //Setting values to redux store
      dispatch(userLogin(res.data));
      dispatch(addAuthtoken(res.authtoken));

      //Navigating To User Dashboard
      navigate("../UserHome");
    } 
    setIsloading(false);
    setmyAlert(res.msg, res.error ? 'error' : 'success')
  };

  return (
    <>
      {isLoading ? (
        <LoaderComp />
      ) : (
        <div className="form-container1 sign-up-container">
          <form onSubmit={handleOnSubmit} className="auth-form">
            <h1>Create Account</h1>
            <span className="auth-span">
              or use your email for registration
            </span>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              placeholder="Name"
              className="auth-input signup-auth-input"
            />
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email"
              className="auth-input signup-auth-input"
            />
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Password"
              className="auth-input signup-auth-input"
            />
            <input
              type="number"
              name="age"
              value={state.age}
              onChange={handleChange}
              placeholder="Age"
              className="auth-input signup-auth-input"
            />
            <input
              type="text"
              name="gender"
              value={state.gender}
              onChange={handleChange}
              placeholder="Gender"
              className="auth-input signup-auth-input"
            />
            <input
              type="number"
              name="weight"
              value={state.weight}
              onChange={handleChange}
              placeholder="Weight in Kg"
              className="auth-input signup-auth-input"
            />
            <input
              type="number"
              name="height"
              value={state.height}
              onChange={handleChange}
              placeholder="Height in Cm"
              className="auth-input signup-auth-input"
            />
            <input
              type="text"
              name="image"
              value={state.image}
              onChange={handleChange}
              placeholder="Image Link"
              className="auth-input signup-auth-input"
            />
            <button className="auth-button">Sign Up</button>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUpForm;
