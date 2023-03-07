import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  const [userType, setUserType] = useState("");

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Name </h1>
          <h6>Community for GLA University</h6>
        </div>
      </div>

      <LogIn handleChange={handleChange} userType={userType} />
    </div>
  );
};

function LogIn(props) {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="input-group">
          <select
            className="infoInput"
            name="userType"
            value={props.userType}
            onChange={props.handleChange}
          >
            <option value="">Select User Type</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
            <option value="department_head">Department Head</option>
          </select>
        </div>

        <div className="button-group">
          <span className="signup-link">Don't have an account? Sign up</span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp(props) {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div className="input-group">
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div className="input-group">
          <select
            className="infoInput"
            name="userType"
            value={props.userType}
            onChange={props.handleChange}
          >
            <option value="">Select User Type</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
            <option value="department_head">Department Head</option>
          </select>
        </div>

        <div className="button-group">
          <span className="login-link">Already have an account? Login!</span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
