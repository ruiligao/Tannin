import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Wine from "../components/Wine";

import Addemployee from "../components/Addemployee";
// import Footer from "../components/Footer";
import API from "../utils/API";
import Header from "../components/Header";
import { Container } from "../components/Grid";
import { List } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";


class EmployeePage extends Component {
  state = {
    books: [],

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
    loginpassword:""
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

  getSavedWine = () => {
    console.log("////////////////");
    console.log(this.state.user.restaurantId);
    console.log("////////////////");
    const admin = { restaurantId: this.state.user.restaurantId };
    API.getSavedWine(admin)
      .then(res => {
        this.setState({
          employeesList: res.data.Employees,
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


  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (

      <Container>
        <div>
           <Link className="navbar-brand" to="/">
          Wine academy
        </Link>
        </div>
        <div>
        <button onClick={this.handleLogout} type="submit" className="btn btn-lg btn-danger float-right">
            Logout
        </button>
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
        <div>Employee Chart</div>
        {/* <div><Link
            className={window.location.pathname === "/wines" ? "nav-link active" : "nav-link"} 
            to="/wines"
          ><button>
          
            </button>
              </Link></div> */}
        </div>
        </div>


        <div className="wineColWrap">
        <div className="wineColWrap1">
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <Wine
                  key={book._id}
                  title={book.title}
                  subtitle={book.subtitle}
                  link={book.link}
                  authors={book.authors.join(", ")}
                  description={book.description}
                  image={book.image}
                  Button={() => (
                    <div>
                    <button
                      onClick={() => this.handleBookDelete(book._id)}
                      className="btn btn-danger ml-2"
                    >
                      Delete
                        </button>

<button
onClick={() => this.handleBookDelete(book._id)}
className="btn btn-danger ml-2"
>
Quiz
  </button></div>
                  )}
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
      </Container>
    );
  }
}

export default EmployeePage;
