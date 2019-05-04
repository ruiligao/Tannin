import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Wine from "../components/Wine";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List } from "../components/List";


class Wines extends Component {
  state = {
    books: [],
    wines:[],
    q: "",
    message: "Search for a wine",

    id:"",
    restaurant:"",
    name:"",
    lastName:"",
    email:"",
    password:"",
  };

  componentDidMount() {
    this.getMaster();
  }


  getMaster = () => {
    API.getMaster()
      .then(res => {
        console.log(res.data);
        this.setState({
          wines: res.data
        })}
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

//   getWineId = id => {
//     API.getWineId(id).then(res => {
//       console.log(res.data);
//     this.setState({
// wine: res.data
//     })}
//     )
//     .catch(() =>
//         this.setState({
//           books: [],
//           message: "Wine not available"
//         })
//       );
//   };
  
// getMaster = () => {
//     API.getMaster(this.state.q)
//       .then(res => {
//         console.log(res.data);
//         this.setState({
//           wine: res.data
//         })}
//       )
//       .catch(() =>
//         this.setState({
//           books: [],
//           message: "Wine not available"
//         })
//       );
//   };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.getBooks();
  // };

  handleWineAdd = id => {
    const wine = this.state.wines.find(wine => wine._id === id);

    API.addWine({
      wineId: id ,
      name: wine.name,
      // subtitle: book.volumeInfo.subtitle,
      // link: book.volumeInfo.infoLink,
      // authors: book.volumeInfo.authors,
      // description: book.volumeInfo.description,
      // image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getMaster());
  };

  // handleWineAdd = id => {
  //   API.addWine(id).then(res => this.getMaster());
  // };

  render() {

    return (
      <Container>
        <div>
           <Link className="navbar-brand" to="/">
          Wine academy
        </Link>
        </div>
<div>
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}
                to="/admin"
              >
                Back to Admin Page
              </Link>
              </div>

              
            <Jumbotron>
            
              <h1 className="text-center">
                <strong>ALL THE WINES IN THE DATABASE</strong>
              </h1>
              
              <h2 className="text-center">Search for WINE.</h2>

            </Jumbotron>
          
            <Card title="Wine Search">

              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          

            <Card title="Results">
              {this.state.wines.length ? (
                <List>
                  {this.state.wines.map(wine => (
                    <Wine
                    id={wine.id}
                      name={wine.name}
                      Button={() => (
                        <button
                          onClick={() => this.handleWineAdd(wine._id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
         
{/* -------------------- */}

        
        <Footer />
      </Container>
    );
  }
}

export default Wines;
