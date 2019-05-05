import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
// import Form from "../components/Form";
import Wine from "../components/Wine";
import Footer from "../components/Footer";
// import Infowine from "../components/Infowine";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";


class Wines extends Component {
  state = {
    // books: [],
    wines: [],
    // q: "",
    // message: "Search for a wine",
    showMe: false,
    // text: "add wine",
    wineId: "",
    wineName:""
  
  };


  hideShow = id => {
    const newState = { ...this.state }
    const wine = this.state.wines.find(wine => wine._id === id);
    newState.wineId = id
    newState.wineName = wine.name
    newState.showMe = !newState.showMe
    newState.scale = this.state.scale > 1 ? 1 : 1.5

    this.setState(newState);
  }

  componentDidMount() {
    this.getMaster();
  }

  getMaster = () => {
    API.getMaster()
      .then(res => {
        console.log(res.data);
        this.setState({
          wines: res.data
        })
      }
      )
      .catch(() =>
        this.setState({
          message: "Wine not available"
        })
      );
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value

  //   });
  // };

  // getBooks = () => {
  //   API.getBooks(this.state.q)
  //     .then(res =>
  //       this.setState({
  //         books: res.data
  //       })
  //     )
  //     .catch(() =>
  //       this.setState({
  //         books: [],
  //         message: "No New Books Found, Try a Different Query"
  //       })
  //     );
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.getBooks();
  // };

  handleWineAdd = id => {
    // const newState = {...this.state}
    // newState.text = "added" 

    const wine = this.state.wines.find(wine => wine._id === id);

    API.addWine({
      wineId: id,
      // name: wine.name,
      // lacidity: wine.wine.aciditys,
      Wines: wine,
    }).then(() => this.getMaster());
  };

  render() {

    return (
      <Container>
<div className="allwrap">
<div className="mainWrapper1">
<div className="mainWrapper2">
<div className="mainWrapper3">

        <div className="winesnav">
        <div>
          {/* <Link className="navbar-brand" to="/">
            Wine academy
        </Link> */}
        </div>
       
        </div>
<br></br>
        <Jumbotron>

        <h1 className="text-center">
            <strong>TANNIN</strong>
          </h1>
          <br></br>
          <h1 className="text-center">
            <strong>Wine Collections</strong>
          </h1>

          <h2 className="text-center">Add Wine to your Restaurant.</h2>

        </Jumbotron>

        <div className="btnadminpagewrap">
          <Link
            className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}
            to="/admin"
          ><button className="btnadminpage"><i className="fas fa-wine-glass-alt">   <span>YOUR RESTAURANT</span></i>
              
            </button>
              </Link>
        </div>

        </div>
        </div>
        </div>
        {/* <Card title="Wine Search">

              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card> */}
            <div className="cardwrapper0">

            <div className="winesheader">
            
            <h1 className="textcenter">
            <strong>Search for WINE</strong>
          </h1>
          </div>


            <div className="cardwrapper1">
      <div className="cardwrapper2">
        <Card title="">
          {this.state.wines.length ? (
            <List>

              {this.state.wines.map(wine => (
                <Wine
                  key={wine._id}
                  id={wine._id}
                  name={wine.name}
                  showMe={this.state.showMe}
                  hideShow={this.hideShow}
                  handleWineAdd={this.handleWineAdd}
                  wineName={this.state.wineName}
                  wineId={this.state.wineId}
                >
                </Wine>
              ))}
            </List>
          ) : (
              <h2 className="text-center">{this.state.message}</h2>
            )}
        </Card>
        </div>
        </div>
        </div>
        {/* -------------------- */}

        </div>
        
        <Footer />
      </Container>
    );
  }
}

export default Wines;
