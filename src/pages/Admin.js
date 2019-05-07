import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Restowine from "../components/Restowine";
import Employees from "../components/Employees";
import Addemployee from "../components/Addemployee";
// import Footer from "../components/Footer";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";


class Admin extends Component {
  state = {
    restaurants: [],
    employees: [],
    wines:[],

    showMe: false,
    // text: "add wine",
    wineId: "",
    wineName:"",
    wineacidity: "",
    wineageability: "",
    winealcohol: "",
    winebody: "",
    winedecant: "",
    wineglassType: "",
    winepairings: "",
    wineprimaryFlavors: [],
    winepronunciation: "",
    winesummary: "",
    winesweetness: "",
    winetannin: "",
    winetemp: "",

  };

  componentDidMount() {
    this.getSavedWine();
  }

  hideShow = id => {
    const newState = { ...this.state }
    const wine = this.state.wines.find(wine => wine._id === id);
    newState.wineId = id
    newState.wineName = wine.name
    newState.wineacidity = wine.acidity
    newState.wineageability = wine.ageability
    newState.winealcohol = wine.alcohol
    newState.winebody = wine.body
    newState.winedecant = wine.decant
    newState.wineglassType = wine.glassType
    newState.winepairings = wine.pairings
    newState.wineprimaryFlavors = wine.primaryFlavors
    newState.winepronunciation = wine.pronunciation
    newState.winesummary = wine.summary
    newState.winesweetness = wine.sweetness
    newState.winetannin = wine.tannin
    newState.winetemp = wine.temp
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
        // console.log(res.data[0]);
        this.setState({
          restaurants: res.data[0],
          wines: res.data[0].Wines
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



        {/* <Jumbotron>
          <h1 className="text-center">
            <strong>ADMIN PAGE WINE COLLECTIONS & EMPLOYEE LIST</strong>
          </h1>
          <h2 className="text-center">Search for wine collections and Add Employees</h2>
        </Jumbotron> */}

<div className="wineandemployeewrapper">
<div className="brandCol">
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

</div>
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
          {this.state.wines.length ? (
            <List>
              {this.state.wines.map(wine => (
                <Restowine
                  key={wine._id}
                  id={wine._id}
                  name={wine.name}
                  handleWineDelete={this.handleWineDelete}

                  showMe={this.state.showMe}
                  hideShow={this.hideShow}
                  wineName={this.state.wineName}
                  wineId={this.state.wineId}
                  wineacidity={this.state.wineacidity}
                  wineageability={this.state.wineageability}
                  winealcohol={this.state.winealcohol}
                  winebody={this.state.winebody}
                  winedecant={this.state.winedecant}
                  wineglassType={this.state.wineglassType}
                  winepairings={this.state.winepairings}
                  wineprimaryFlavors={this.state.wineprimaryFlavors}
                  winepronunciation={this.state.winepronunciation}
                  winesummary={this.state.winesummary}
                  winesweetness={this.state.winesweetness}
                  winetannin={this.state.winetannin}
                  winetemp={this.state.winetemp}

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

{/* 
        <Footer /> */}
      </Container>
    );
  }
}

export default Admin;
