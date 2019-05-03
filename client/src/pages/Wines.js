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


class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search for a wine",

    id:"",
    restaurant:"",
    name:"",
    lastName:"",
    email:"",
    password:"",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      
    });
  };

  getBooks = () => {
    API.getMaster(this.state.q)
      .then(res => {
        console.log(res.data);
        this.setState({
          wine: res.data
        })}
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        
          
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
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Wine
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
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
         
        <Footer />
      </Container>
    );
  }
}

export default Home;
