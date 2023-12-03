import React from "react";
import { useNavigate } from 'react-router-dom';
import UserService from "../../services/UserService";

function SignInForm() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async(evt) => {
    evt.preventDefault();

    const res= await UserService.userLogin(state);
    if(!res.error){
      for (const key in state) {
        setState({
          ...state,
          [key]: ""
        });
      }
      //Setting values to redux Store
      

      //Navigating to User Dashboard
      navigate('../UserHome')
    }
    else{
      alert(res.message);
    }

  };

  return (
    <div className="form-container1 sign-in-container">
      <form onSubmit={handleOnSubmit} className="auth-form">
        <h1>Sign in</h1>
        <span className="auth-span">or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="auth-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="auth-input"
        />
        <button className="auth-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
