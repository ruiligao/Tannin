import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Footer from "../components/Footer";
import SignupLoginForm from "../components/SignupLoginForm";
import API from "../utils/API";
import { Container } from "../components/Grid";

class SignupLogin extends Component {
  state = {
    showMe: false,
    restaurant: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    loginemail: "",
    loginpassword: "",
    redirectTo: null
  }
  // this.handleFormSubmit = this.handleFormSubmit.bind(this)
  // this.handleInChange = this.handleInChange.bind(this)
  hideShow = () => {
    const newState = { ...this.state }
    newState.showMe = !newState.showMe
    newState.scale = this.state.scale > 1 ? 1 : 1.5
    this.setState(newState);
  }

  handleSubmitInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value

    });
  };

  handleSignupFormSubmit = async event => {
    event.preventDefault();
    const { restaurant, firstName, lastName, email, password } = this.state;
    if (firstName && lastName && restaurant && email && password) {
      const userInfo = { firstName, lastName, restaurant, email, password }
      // console.log(userInfo);
      API.signUpSubmit(userInfo).then(response => {
        console.log(response)
        if (!response.data.errmsg) {
          console.log('youre good')
          this.setState({
            redirectTo: '/login'
          })
        } else {
          console.log('duplicate')
        }
      })
    }
  }
  handleLoginInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value

    });
  };

  handleLoginFormSubmit = event => {
    event.preventDefault();
    this.login();
  };

  login() {
    API.logIn(this.state.username, this.state.password).then(response => {
      console.log(response)
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user,
          redirectTo: '/admin'
        })
      }
    })
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <Container>
        <SignupLoginForm
          handleSubmitInputChange={this.handleSubmitInputChange}
          handleSignupFormSubmit={this.handleSignupFormSubmit}
          id={this.state.id}
          restaurant={this.state.restaurant}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          handleLoginInputChange={this.handleLoginInputChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          loginemail={this.state.loginemail}
          loginpassword={this.state.loginpassword}
          showMe={this.state.showMe}
          hideShow={this.hideShow}
        />
        <Footer />
      </Container>
    );
  }
}

export default SignupLogin;
