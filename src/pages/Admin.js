import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Restowine from "../components/Restowine";
import Employees from "../components/Employees";
import Addemployee from "../components/Addemployee";
import Footer from "../components/Footer";
import Header from "../components/Header";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";
// import { userInfo } from "os";


class Admin extends Component {
  state = {
    books: [],
    user: "",
    showMe: false,

    id:"",
    restaurant:"",
    employees:"",
    name:"",
    lastName:"",
    email:"",
    password:"",
    loginemail: "",
    loginpassword:"",
    loggedIn: true,
    redirectTo: null,

  };

  componentDidMount() {
		API.getUser().then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					// loggedIn: false,
          // user: null,
          redirectTo: "/"
				})
			}
		})
	}
  handleLogout = event => {
		event.preventDefault()
		console.log('logging out')
		API.logOut().then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					// loggedIn: false,
          // user: null,
          redirectTo: '/'
					
				})
			}
		})
	}
  

  hideShow = () => {
    const newState = {...this.state}
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
  handleLogout= event => {
    event.preventDefault()
		console.log('logging out')
		API.logOut().then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})

  }
  getSavedWine = () => {
    API.getSavedWine()
      .then(res =>
        this.setState({
          restaurants: res.data
        })
      )
      .catch(err => console.log(err));
  };

  getSavedEmployee = () => {
    API.getSavedEmployee()
      .then(res =>
        this.setState({
          employees: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleWineDelete = id => {
    API.deleteWine(id).then(res => this.getSavedWine());
  };

  handleEmployeeDelete = id => {
    API.deleteEmployee(id).then(res => this.getSavedEmployee());
  };

  render() {
    return (

      <Container>


        <div>
           <Link className="navbar-brand" to="/">
           <i className="fas fa-wine-glass-alt"></i> Wine academy
        </Link>
        </div>
        <div>
        <button onClick={this.handleLogout} type="submit"className="btn btn-lg btn-danger float-right">
               Logout
        </button>
          {/* <Link className="navbar-brand" to="/">
            Logout
        </Link> */}
        
        </div>
        <Header user={this.state.user} />

<Addemployee
            handleInputChange={this.handleInputChange}
            id={this.state.id}
             restaurant={this.state.restaurant}
             name={this.state.name}
             lastName={this.state.lastName}
             email={this.state.email}
             password={this.state.password}
             loginemail={this.state.loginemail}
             loginpassword={this.state.loginpassword}
showMe={this.state.showMe}
      hideShow = {this.hideShow}
            ></Addemployee>


        <br></br>

        {/* <Jumbotron>
          <h1 className="text-center">
            <strong>ADMIN PAGE WINE COLLECTIONS & EMPLOYEE LIST</strong>
          </h1>
          <h2 className="text-center">Search for wine collections and Add Employees</h2>
        </Jumbotron> */}

<div className="wineandemployeewrapper">
        <div className="wineCol">
        <div className="wineTitleWrap">
        <div className="wineTitleWrap1">
        <div>Wine</div>
        <div><Link
            className={window.location.pathname === "/wines" ? "nav-link active" : "nav-link"} 
            to="/wines"
          ><button>
            Add Wine
            </button>
              </Link></div>
        </div>
        </div>


        <div className="wineColWrap">
        <div className="wineColWrap1">
          {/* {this.state.restaurants.length ? (
            <List>
              {this.state.restaurants.map(restaurant => (
                <Restowine
                  key={restaurant._id}
                  title={restaurant.title}
                  subtitle={restaurant.subtitle}
                  link={restaurant.link}
                  authors={restaurant.authors.join(", ")}
                  description={restaurant.description}
                  image={restaurant.image}
                  Button={() => (
                    <button
                      onClick={() => this.handleBookDelete(restaurant._id)}
                      className="btn btn-danger ml-2"
                    >
                      Delete
                        </button>
                  )}
                />
              ))}
            </List>
          ) : (
              <h2 className="text-center">Not Available</h2>
            )} */}
            </div>
            </div>
        </div>
{/* -----------------EMPLOYEES COLUMN------------------- */}
        <div className="employeeCol">
        <div className="empTitleWrap">
        <div className="empTitleWrap1">
        <div>Employees</div>
        <div><button onClick={() => this.hideShow()}>Add Employee</button></div>
        </div>
        </div>

        <div className="employeeColWrap">
        <div className="employeeColWrap1">
          {this.state.employees.length ? (
            <List>
              {this.state.employees.map(employee => (
                <Employees
                  key={employee._id}
                  title={employee.title}
                  subtitle={employee.subtitle}
                  link={employee.link}
                  authors={employee.authors.join(", ")}
                  description={employee.description}
                  image={employee.image}
                  Button={() => (
                    <button
                      onClick={() => this.handleEmployeeDelete(employee._id)}
                      className="btn btn-danger ml-2"
                    >
                      Delete
                        </button>
                  )}
                />
              ))}
            </List>
          ) : (
              <h2 className="text-center">Add Employees</h2>
            )}
            </div>
            </div>
        </div>
        </div>


        <Footer />
      </Container>
    );
  };
}
  
export default Admin;
