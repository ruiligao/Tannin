import React, { Component } from "react";
// import Footer from "../components/Footer";
// import Loginsignup from "../components/Loginsignup";
import API from "../utils/API";
// import { Container } from "../components/Grid";
import { Link } from 'react-router-dom'
// import Login from "./Login";
import SignupLogin from "./SignupLogin";
import currentUser from "../components/currentUser";

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			//go to the user page 
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/admin" className="nav-link">
							Admin
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props.logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		//stay on the home page
		return (
			<nav className="navbar">
				{/* <ul className="nav">
					<li className="nav-item"> */}
						<Link to="/" className="nav-link">
							Home
						</Link>
					{/* </li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul> */}
			</nav>
		)
	}
}

class Home extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		// this.logout = this.logout.bind(this)
		// this.login = this.login.bind(this)
	}
	// componentDidMount() {
	// 	API.getUser().then(response => {
	// 		console.log(response.data)
	// 		if (!!response.data.user) {
	// 			console.log('THERE IS A USER')
	// 			this.setState({
	// 				loggedIn: true,
	// 				user: response.data.user
	// 			})
	// 		} else {
	// 			this.setState({
	// 				loggedIn: false,
	// 				user: null
	// 			})
	// 		}
	// 	})
	// }

	render() {
		return (
			<div className="App">
				{/* <h1>This is the main App component</h1> */}
				{/* <Header user={this.state.user} /> */}
				<DisplayLinks logout={this.logout} loggedIn={this.state.loggedIn} />
				{/* <currentUser user={this.state.user} /> */}
				{/* <Login login={this.login}/> */}
				<SignupLogin />
				{/* <Route exact path="/" render={() => <Home user={this.state.user} />} />
				
						<Login
							login={this.login}
						/>
				/>
				<Route exact path="/signup" component={Signup} /> */}
			</div>
		)
	}
}

export default Home
