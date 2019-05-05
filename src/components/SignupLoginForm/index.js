import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SignupLoginForm({ showMe, hideShow, restaurant, firstName, lastName, email, password, loginemail, loginpassword, handleSubmitInputChange, handleSignupFormSubmit, handleLoginInputChange,handleLoginFormSubmit }) {
  return (

    <div>
      <button className="sampleBtn" onClick={() => hideShow()}>Login/ Sign Up</button>
      {showMe ?
        <div className="overlay">
          <div className="wrap1">
            <div className="wrap2">
              <div className="wrap3">

                <div className="signUpwrap">
                  <div> Sign Up</div>
                  <form>
                    <div className="form-group">
                      <div>
                        <label>
                          <strong>Restaurant</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="text"
                            value={restaurant}
                            placeholder="Restaurant"
                            name="restaurant"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label>
                          <strong>First Name</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>

                        <label>
                          <strong>Last Name</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label>
                          <strong>Email</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="email"
                            value={email}
                            placeholder="Email Address"
                            name="email"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>

                        <label>
                          <strong>Password</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="password"
                            value={password}
                            placeholder="Password"
                            name="password"
                            onChange={handleSubmitInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pull-right">

                      <button
                        onClick={handleSignupFormSubmit}
                        type="submit"
                        className="btn btn-lg btn-danger float-right"
                      >
                        Submit
        </button>
                    </div>
                  </form>
                </div>
                <div className="signUpwrap">
                  <br></br>
                  <div> Log In</div>
                  <form>
                    <div className="form-group">
                      <div>

                        <label>
                          <strong>Email</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="email"
                            value={loginemail}
                            placeholder="Email Address"
                            name="loginemail"
                            onChange={handleLoginInputChange}
                            required
                          />
                        </div>

                        <label>
                          <strong>Password</strong>
                        </label>
                        <div>
                          <input
                            className="form-control"
                            id=""
                            type="password"
                            value={loginpassword}
                            placeholder="Password"
                            name="loginpassword"
                            onChange={handleLoginInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pull-right">

                      <button
                        onClick={handleLoginFormSubmit}
                        type="submit"
                        className="btn btn-lg btn-danger float-right"
                      >
                        Login
        </button>
                    </div>
                  </form>
                </div>
                <br></br>
              </div>
              <div className="btnwrap">
                <button><Link
                  className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}
                  to="/admin"
                >
                  admin
              </Link></button>

                <button onClick={() => hideShow()}>CLOSE</button>
              </div>
            </div>
          </div>
        </div>
        : null
      }

    </div>
  );
}

export default SignupLoginForm;
