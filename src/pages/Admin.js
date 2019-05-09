import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Restowine from "../components/Restowine";
import Employees from "../components/Employees";
import Addemployee from "../components/Addemployee";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";

class Admin extends Component {
  state = {
    restaurants: [],
    employeesList: [],
    winesMaster: [],
    wineCollections:[],

    showMe: false,
    showMe2: false,
    showMeEmp: false,
    // text: "add wine",
    wineId: "",
    wineName: "",
    wineacidity: "",
    wineageability: "",
    winealcohol: "",
    winebody: "",
    winedecant: "",
    wineglassType: "",
    winepairings: "",
    wineprimaryFlavors: [],
    winepronunciation: "",
    winesummary: "",
    winesweetness: "",
    winetannin: "",
    winetemp: "",

    empId:"",
    empfirstName:"",
    emplastName:"",
    empEmail:'"',
    user: "",
    restaurantId: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    // loginemail: "",
    // loginpassword: "",
    loggedIn: true,
    redirectTo: null,

  };

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    API.getUser().then(response => {
      console.log("LOGGED IN USER: ", response)
      if (!!response.data.user) {
        console.log('THERE IS A USER');
        console.log(response.data);
        this.setState({
          loggedIn: true,
          user: response.data.user
        })

        this.getSavedWine()
      } else {
        this.setState({
          loggedIn: false,
          user: null,
          redirectTo: "/"
        });
      }
    });
  }
  hideShow2 = () => {
    const newState = { ...this.state }
    newState.showMe2 = !newState.showMe2
    // newState.scale = this.state.scale > 1 ? 1 : 1.5

    this.setState(newState);
  }

  hideShow = id => {
    const newState = { ...this.state }
    const wine = this.state.wineCollections.find(wine => wine._id === id);
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


  hideShowEmp = id => {
    const newState = { ...this.state }
    const emp = this.state.employeesList.find(emp => emp._id === id);
 
    newState.empId = id
    newState.empfirstName = emp.firstName
    newState.emplastName = emp.lastName
    newState.empEmail = emp.email
    
    newState.showMeEmp = !newState.showMeEmp
   
    this.setState(newState);
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value

    });
  };
  handleLogout = event => {
    event.preventDefault();
    console.log('logging out');
    API.logOut().then(response => {
      console.log(response.data);
      this.setState({
        loggedIn: false,
        user: null,
      })
      this.props.history.push(`/`);
    });
  };

  getSavedWine = () => {
    console.log("////////////////");
    console.log(this.state.user.email);
    console.log("////////////////");
    const admin = { email: this.state.user.email };
    API.getSavedWine(admin)
      .then(res => {
        // console.log(res.data);
        console.log("DEDADAEDAEDAEDAEDDA");
        console.log(res.data._id);
        // console.log(res.data[0]);
        console.log("SAVESTAFF");
        console.log(res.data.Employees);
        console.log("SAVESTAFF");
        this.setState({
          employeesList: res.data.Employees,
          wineCollections: res.data.Wines,
          restaurantId: res.data._id
        })
      }

      )
      .catch(() =>
        this.setState({
          message: "Wine not available"
        })
      );
  };
  handleAddEmployeeChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }
  handleAddEmpolyeeFormSubmit = event => {
    event.preventDefault();
    this.addEmployee();
    // this.hideShow2();
  }

  addEmployee = () => {
    console.log("???????????????");
    console.log(this.state);
    console.log("REID: " + this.state.restaurantId);

    const { name, lastName, email, password, restaurantId } = this.state;
    const employeeData = { name, lastName, email, password, restaurantId };
    console.log(employeeData);
    API.addEmployee(employeeData).then((res) => {
      console.log("ADD Employees");
      console.log(res.data.employee);
      console.log(res.data.restaurant);
      if (res.data==="Employee already exists") {
        alert(res.data)
        this.hideShow2();
      }
      else{
        // alert(JSON.stringify(res.data))
        this.state.employeesList.unshift(res.data.employee)
      this.setState({
       employees: this.state.employees
       });
       this.hideShow2();
    }
    });
  }


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
    API.deleteWine(id).then(res => this.componentDidMount());
  };

  handleEmployeeDelete = id => {
    API.deleteEmployee(id).then(res => this.getSavedEmployee());
  };

  render() {
    return (

      <Container>


        {/* MODAL ----------------------- */}
        <Addemployee
          handleAddEmployeeChange={this.handleAddEmployeeChange}
          handleAddEmpolyeeFormSubmit={this.handleAddEmpolyeeFormSubmit}
          id={this.state.id}
          restaurant={this.state.restaurant}
          name={this.state.name}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          //  loginemail={this.state.loginemail}
          //  loginpassword={this.state.loginpassword}
          showMe2={this.state.showMe2}
          hideShow2={this.hideShow2}
        ></Addemployee>

        {/* MODAL ----------------------- */}

        {/* <Jumbotron>
          <h1 className="text-center">
            <strong>ADMIN PAGE WINE COLLECTIONS & EMPLOYEE LIST</strong>
          </h1>
          <h2 className="text-center">Search for wine collections and Add Employees</h2>
        </Jumbotron> */}

        <div className="wineandemployeewrapper">
          <div className="brandCol">
            <div>
              <Header user={this.state.user} />
              <Link className="navbar-brand" to="/">
                <i className="fas fa-wine-glass-alt"></i> Wine academy
        </Link>
            </div>
            <div>
              <button onClick={this.handleLogout} type="submit" className="btn btn-lg btn-danger float-right">
                Logout
         </button>


            </div>

          </div>
          <div className="wineCol">
            <div className="wineTitleWrap">
              <div className="wineTitleWrap1">

              <div><Link
                  
                  to="/wines"
                ><button className="addwinebtnmain"><i className="fas fa-wine-bottle"></i>
            </button>
            
                </Link></div>
                <div></div>
                
              </div>
            </div>
            <div className="wineColWrap">
              <div className="wineColWrap1">
                {this.state.wineCollections.length ? (
                  <List>
                    {this.state.wineCollections.map(wine => (
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
                <div></div>
                <div><button className="addempbtnmain" onClick={() => this.hideShow2()}><i class="fas fa-user-plus"></i></button></div>
              </div>
            </div>

            <div className="employeeColWrap">
              <div className="employeeColWrap1">
                {this.state.employeesList.length ? (
                  <List>
                    {this.state.employeesList.map(employee => (
                      <Employees
                        key={employee._id}
                        id={employee._id}
                        firstName={employee.firstName}
                        handleWineDelete={this.handleWineDelete}
                        empId={this.state.empId}
                        empfirstName={this.state.empfirstName}
                        emplastName={this.state.emplastName}
                        empEmail={this.state.empEmail}
                       
                        showMeEmp={this.state.showMeEmp}
                        hideShowEmp={this.hideShowEmp}
                 
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
