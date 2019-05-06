import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Restowine from "../components/Restowine";
import Employees from "../components/Employees";
import Addemployee from "../components/Addemployee";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";


class Admin extends Component {
  state = {
    restaurants: [],
    employees: [],

    showMe: false,
    message:""

  };

  componentDidMount() {
    this.getSavedWine();
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

  getSavedWine = () => {
    API.getSavedWine()
      .then(res => {
        console.log(res.data);
        this.setState({
          restaurants: res.data
        })
      }
      )
      .catch(() =>
        this.setState({
          message: "Wine not available"
        })
      );
  };

  // getSavedEmployee = () => {
  //   API.getSavedEmployee()
  //     .then(res =>
  //       this.setState({
  //         employees: res.data
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

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
          <Link className="navbar-brand" to="/">
            Logout
        </Link>
        
        </div>

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
          {this.state.restaurants.length ? (
            <List>
              {this.state.restaurants.map(restaurant => (
                <Restowine
                  key={restaurant._id}
                  id={restaurant._id}
 wines={restaurant.Wines}
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
            )}
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
  }
}

export default Admin;
