import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import SavedWine from "../components/SavedWine";
// import Addemployee from "../components/Addemployee";
// import Footer from "../components/Footer";
import API from "../utils/API";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import QuestionCard from "../components/QuestionCard";
import Empinfo from "../components/Empinfo";
import { Container } from "../components/Grid";
import questions from "../questions.json";
// importing the wine template for testing purposes 
import wineData from "../franciacorta.json"

import { List } from "../components/List";
import { Link } from "react-router-dom";
import "./style.css";


class EmployeePage extends Component {
  state = {
    wineCollections: [],

    showMe6: false,
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
    empuserestaurantName:"",

    questions,
    filteredQs: [],
    correctFlavors: wineData.primaryFlavors,
    submittedFlavor: "",
    wineData,
    counter: 0,
    score: 0,
    highScore: 0,

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
// --------
componentWillMount() {
  const categories = Object.keys(wineData)
  const cheatSheet = Object.values(wineData)
  const filteredQs = questions.filter(q => {
    return categories.includes(q.category)
  });
  this.setState({ filteredQs: filteredQs })
  this.shuffle(filteredQs);

  // console.log("Categories for", wineData.name, ": ", categories)
  // console.log("Answers for ", wineData.name, ": ", truth)
  console.log("Questions to be run for", wineData.name, ": ", filteredQs)
  console.log(this.state.correctFlavors)
};


// Here we use the Fisher-Yates alogrithm to randomize the characters array
shuffle(arr) {
  var j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x
  }
  return arr;
};

handleBtnClick = (event) => {
  // renaming this.state so we don't have to write it out each time
  const newState = { ...this.state };

  let points = parseInt(event.target.value);
  newState.counter = newState.counter + points

  // in this if statement we check to see if the player lost, log their loss, and clear the guesses array & score

  // finally we use setState to update the state to the virtual DOM
  this.setState(newState);
}

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;

  // Updating the input's state
  this.setState({
    [name]: value
  });
};

handleCheckFlavor = () => {

  const newState = { ...this.state };

  console.log(newState.correctFlavors)
   if (this.state.correctFlavors.includes(this.state.submittedFlavor)) {
    this.setState({
      counter: newState.counter +1,
      submittedFlavor: ""
    })
   } else { 
     this.setState({
      submittedFlavor: ""
  })}
}

handleScoreCalc = () => {
  const newState = { ...this.state };
  let hundreds = newState.counter * 100;
  let total = newState.filteredQs.length;
  newState.score = hundreds / total

  console.log("hundreds: ", hundreds)
  console.log("total # of Questions: ", total)
  console.log("Your score for ", wineData.name, ": ", newState.score, "%")
  this.setState({
    score: newState.score
  });
}



hideShowQuiz = id => {
  const newState = { ...this.state }
  const wine = this.state.wineCollections.find(wine => wine._id === id);
  newState.wineId = id
  // newState.wineName = wine.name
  // newState.wineacidity = wine.acidity
  // newState.wineageability = wine.ageability
  // newState.winealcohol = wine.alcohol
  // newState.winebody = wine.body
  // newState.winedecant = wine.decant 
  // newState.wineglassType = wine.glassType
  // newState.winepairings = wine.pairings
  // newState.wineprimaryFlavors = wine.primaryFlavors
  // newState.winepronunciation = wine.pronunciation
  // newState.winesummary = wine.summary
  // newState.winesweetness = wine.sweetness
  // newState.winetannin = wine.tannin
  // newState.winetemp = wine.temp
  newState.showMe6 = !newState.showMe6
  newState.scale = this.state.scale > 1 ? 1 : 1.5
  console.log("WINE ID:")
  console.log(id)
  this.componentDidMount()
  this.setState(newState);

}

  // ----------

  render() {
    return (

      <Container>
        {this.state.showMe6 ?
  <div className="overlay1">
  <Wrapper>
        <div className="qcardwrapper1">
          <div className="qcardwrapper2">
          {/* Map over this.state.characters and render a CharacterCard component for each character object */}
          {this.state.filteredQs.map(filteredQ => (
            <QuestionCard
              // each card will inherit an id, a key, a name, and an image from its respective array object
              handleBtnClick={this.handleBtnClick}
              handleInputChange={this.handleInputChange}
              handleCheckFlavor={this.handleCheckFlavor}
              shuffle={this.shuffle}

              id={filteredQ.id}
              key={filteredQ.id}
              question={filteredQ.question}
              answers={filteredQ.falseAnswers}
              category={filteredQ.category}
              wineName={wineData.name}
              sweetness={wineData.sweetness}
              body={wineData.body}
              tannin={wineData.tannin}
              acidity={wineData.acidity}
              alcohol={wineData.alcohol}
              temp={wineData.temp}
              decant={wineData.decant}
              ageability={wineData.ageability}
              region={wineData.region}
              counter={this.state.counter}
              submitFlavor={this.state.submitFlavor}
            />
          ))}
          </div>
          
          </div>
          <div className="submitanswersbtn">
          <button className="submitFinal">Submit Answers</button>

          {/* <Link
            className={window.location.pathname === "/employeepage" ? "nav-link active" : "nav-link"} 
            to="/employeepage"
          ><button onClick={() => {this.hideShowQuiz(this.wineId); window.location.reload()}}>
            Employee page
            </button>
              </Link> */}


          <button className="btnwrap1a" onClick={() => {this.hideShowQuiz(this.wineId); window.location.reload()}}>Close</button>
</div>
        </Wrapper>
 
</div>
:null
}


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
                        ageability={wine.ageability}
                        // handleWineDelete={this.handleWineDelete}
                        hideShowQuiz={this.hideShowQuiz}
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
              <h2 className="text-center"></h2>
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
