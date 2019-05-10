import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import SavedWine from "../components/SavedWine";
// import Addemployee from "../components/Addemployee";
// import Footer from "../components/Footer";
import API from "../utils/API";
import Header from "../components/Header";

import Empinfo from "../components/Empinfo";
import { Container } from "../components/Grid";

import { List } from "../components/List";
// import { Link } from "react-router-dom";
import "./style.css";


class EmployeePage extends Component {
  state = {
    wineCollections: [],


    showMe4: false,
    showMe: false,
    user: "",
    loggedIn: true,
    redirectTo: null,
    id:"",
    restaurant:"",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    loginemail:"",
    loginpassword:"",

    greet:"",
    empuserId:"",
    empusefirstName:"",
    empuselastName:"",
    empuserestaurantName:""
  };

  // componentDidMount() {
  //   this.getSavedBooks();
  // }

  hideShow = () => {
    const newState = {...this.state}
    newState.showMe = !newState.showMe 
    newState.scale = this.state.scale > 1 ? 1 : 1.5
    
    // this.setState({
      
    // })
    
    // alert( "hi")

// newState.showMe = !newState.showMe;

    this.setState(newState);
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
          user: response.data.user,
        });
        this.getSavedWine()
      } 
      else {
        this.setState({
          loggedIn: false,
          user: null
        });
        this.props.history.push(`/`);
      }
    });
  }

  getSavedWine = () => {
    console.log("////////////////");
    console.log(this.state.user.restaurantId);
    console.log("////////////////");
    const admin = { restaurantId: this.state.user.restaurantId };
    API.getSavedWine(admin)
      .then(res => {
        this.setState({
          wineCollections: res.data.Wines,
          
        })
      }

      )
      .catch(() =>
        this.setState({
          message: "Wine not available"
        })
      );
  };
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
      console.log(response.data.msg);
      this.setState({
        loggedIn: false,
        user: null,
      });
      this.props.history.push(`/`);
      console.log(this.state);
    });
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

  

  hideShow4 = id=> {
    const newState = { ...this.state }


newState.greet = "Welcome"
      newState.empuseId= newState.user._id
          newState.empusefirstName=newState.user.firstName
          newState.empuselastName=newState.user.lastName
          newState.empuserestaurantName=newState.user.restaurantName
          console.log(newState.empuseId);
    newState.showMe4 = !newState.showMe4
    this.setState(newState);

  }


  render() {
    return (

      <Container>
<div className="emppagemainwrap">
<Empinfo
          useId={this.state.useId}
          usefirstName={this.state.empusefirstName}
          uselastName={this.state.empuselastName}
          userestaurantName={this.state.empuserestaurantName}
          showMe4={this.state.showMe4}
          hideShow4={this.hideShow4}
          handleLogout={this.handleLogout}
          greet = {this.state.greet}
        ></Empinfo> 

<div className="emppanel">
<div className="empwelcomebtnwrap">
            <button
onClick={() => this.hideShow4()}
className="empwelcomebtn"
><Header 
        user={this.state.user} />
                        </button>
                        </div>
            </div>

        <br></br>



        {/* <Jumbotron>
          <h1 className="text-center">
            <strong>ADMIN PAGE WINE COLLECTIONS & EMPLOYEE LIST</strong>
          </h1>
          <h2 className="text-center">Search for wine collections and Add Employees</h2>
        </Jumbotron> */}

<div className="employeepagewrapper">
        <div className="emppagecol">
        <div className="wineTitleWrap">
        <div className="wineTitleWrap1">
        <div>Employee Chart</div>
        {/* <div><Link
            className={window.location.pathname === "/wines" ? "nav-link active" : "nav-link"} 
            to="/wines"
          ><button>
          
            </button>
              </Link></div> */}
        </div>
        </div>


        <div className="emppageColWrap">
        <div className="emppageColWrap1">
        {this.state.wineCollections.length ? (
                  <List>
                    {this.state.wineCollections.map(wine => (
                      <SavedWine
                        key={wine._id}
                        id={wine._id}
                        name={wine.name}
                        // handleWineDelete={this.handleWineDelete}

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
              <h2 className="text-center">Pick a wine</h2>
            )}
            </div>
            </div>
        </div>
{/* -----------------EMPLOYEES COLUMN------------------- */}
        
        </div>
        {/* <Footer /> */}
        </div>
      </Container>
    );
  }
}

export default EmployeePage;
