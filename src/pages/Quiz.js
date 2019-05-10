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
  // Setting this.state.characters to the character json array
  // Setting score, losses, and highScore to 0 for the start of each game
  state = {
    questions,
    filteredQs: [],
    aFlavor: wineData.primaryFlavors,
    submitFlavor: "",
    wineData,
    score: 0,
    highScore: 0,
  };

  // componentWillMount shuffles the CharacterCards before the DOM is loaded
  componentWillMount() {
    const categories = Object.keys(wineData)
    const truth = Object.values(wineData)
    const filteredQs = questions.filter(q => {
      return categories.includes(q.category)
    });
    this.setState({ filteredQs: filteredQs })
    this.shuffle(filteredQs);

    console.log("Categories for", wineData.name, ": ", categories)
    console.log("Answers for ", wineData.name, ": ", truth)
    console.log("Questions to be run for", wineData.name, ": ", filteredQs)
    console.log("The list of false answers for", filteredQs[0].category, ": ", filteredQs[0].falseAnswers)
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

  handleBtnClick = () => {
    // renaming this.state so we don't have to write it out each time
    const newState = { ...this.state };

    newState.score = newState.score +1

    // in this if statement we check to see if the player lost, log their loss, and clear the guesses array & score

    // finally we use setState to update the state to the virtual DOM
    this.setState(newState);
  }


  handleCheckFlavor = () => {
    console.log(this.state.aFlavor)
  }


  // renders react elements into the DOM
  render() {
    return (
      // the parent div into which our components will be rendered
      <div className="background">

        <Wrapper>
          {/* Map over this.state.characters and render a CharacterCard component for each character object */}
          {this.state.filteredQs.map(filteredQ => (
            <QuestionCard
              // each card will inherit an id, a key, a name, and an image from its respective array object
              handleBtnClick={this.handleBtnClick}
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
              truth={this.truth}
              submitFlavor={this.state.submitFlavor}
            />
          ))}
          <button className="submitFinal">Submit Answers</button>

        </Wrapper>
      </div>
    );
  }
}

export default Quiz;
