import React, { Component } from 'react';
// importing components
import QuestionCard from "../components/QuestionCard";
import Wrapper from "../components/Wrapper";
// importing the question array from the json file
import questions from "../questions.json";
// importing the wine template for testing purposes 
import wineData from "../franciacorta.json"
//importing css stylings
import './style.css';

class Quiz extends Component {
  state = {
    questions,
    filteredQs: [],
    correctFlavors: wineData.primaryFlavors,
    submittedFlavor: "",
    wineData,
    counter: 0,
    score: 0,
    highScore: 0,
  };

  // componentWillMount shuffles the CharacterCards before the DOM is loaded
  componentWillMount() {
    const categories = Object.keys(wineData)
    const filteredQs = questions.filter(q => {
      return categories.includes(q.category)
    });
    this.setState({ filteredQs: filteredQs })
    this.shuffle(filteredQs);

    // console.log("Categories for", wineData.name, ": ", categories)
    // console.log("Answers for ", wineData.name, ": ", truth)
    // console.log("Questions to be run for", wineData.name, ": ", filteredQs)
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


  // renders react elements into the DOM
  render() {
    return (
      // the parent div into which our components will be rendered
      <div className="background">

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
              counter={this.state.counter}
              submitFlavor={this.state.submitFlavor}
            />
          ))}
          </div>
          </div>
        </Wrapper>
        <div className="submitanswersbtn">
          <button className="submitFinal">Submit Answers</button>
</div>
      </div>
    );
  }
}

export default Quiz;
