import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true);

  const [data, setData] = useState({ firstname: "", lastname: "", username: "", password: "", confirmpass: "", userType: "" })

  const [confirmPass, setconfirmPass] = useState(true);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) : setconfirmPass(false);
    }
    else {
      dispatch(logIn(data))
    }
  };

  const resetForm = () => {
    setconfirmPass(true);
    setData({
      firstname: "", lastname: "", username: "", password: "", confirmpass: "", userType: ""
    });
  };

  return (
    <div className="Auth">
      <div className="logoDivision">
        <div className="a-left">
          <img src={Logo} alt="" />
          <div className="Webname">
            <h1>GLAdiator </h1>
            <h6>Community for GLA University</h6>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "SignUp" : "Login"}</h3>

          {isSignUp && <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
              onChange={handleChange}
              value={data.firstname}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
              onChange={handleChange}
              value={data.lastname}
            />
          </div>
          }

          <div className="input-group">
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Email"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp &&
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            }
          </div>

          {isSignUp && <div className="input-group">
            <select
              className="infoInput"
              name="userType"
              value={data.userType}
              onChange={handleChange}
            >
              <option value="">Select User Type</option>
              <option value="faculty">Faculty</option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
              <option value="department_head">Department Head</option>
            </select>
          </div>
          }
          <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: '12px', alignSelf: 'flex-end' }}>* Confirm Password is not same</span>
          <div className="button-group">
            <span className="login-link" onClick={() => { setIsSignUp((prev) => !prev); resetForm() }} style={{ cursor: "pointer" }}>{isSignUp ? "Already have an account? Login" : "Dont have an account? SignUp"}</span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading} >
            {loading? "Loading..." : isSignUp ? "Signup" : "Login"} 
            
          </button>
        </form>
      </div>



    </div>
  );
};

export default Auth;
