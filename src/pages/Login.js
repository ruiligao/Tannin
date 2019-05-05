import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import API from "../utils/API";
import { Container } from "../components/Grid";


class Login extends Component {
  state = {
    showMe: false,
    username: "",
    password: "",
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


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value

    });
  };

  handleFormSubmit = event => {
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
		} else {
    return (
      <Container>
        <LoginForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          id={this.state.id}
          loginemail={this.state.username}
          loginpassword={this.state.password}
          showMe={this.state.showMe}
          hideShow={this.hideShow}
        />
        <Footer />
      </Container>
    );
  }
}
}

export default Login;
