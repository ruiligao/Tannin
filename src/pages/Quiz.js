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
    wineData,
    falacy: [],
    truth: [],
    score: 0,
    losses: 0,
    highScore: 0,
  };

  // componentWillMount shuffles the CharacterCards before the DOM is loaded
  componentWillMount() {
    const categories = Object.keys(wineData)
    const truth = Object.values(wineData)
    this.setState({ truth: truth })

    const filteredQs = questions.filter(q => {
      return categories.includes(q.category)
    });

    console.log("Categories for", wineData.name, ": ", categories)
    console.log("Answers for ", wineData.name, ": ", truth)
    console.log("Questions to be run for", wineData.name, ": ", filteredQs)
    console.log("The list of false answers for", filteredQs[0].category, ": ", filteredQs[0].falseAnswers)

    this.setState({ filteredQs: filteredQs })

    // let falacy = [];
    // for (let i = 0; i < filteredQs.length; i++) {
    //   if ( !truth.includes(filteredQs[i])) {
    //     falacy.push(filteredQs[i])
    //   };
    //   console.timeLog("Falacy: ", falacy)
    //   return falacy
    // }
    
    // this.setState ({falacy: falacy})
    // console.log("All false answers: ", falacy)
    this.shuffle(filteredQs);
  };
  // filterFalse(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!truth.includes(arr[i])) {

  //     };
  //   };
  //   return arr
  // };

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

  handleBtnClick = questionId => {
    // renaming this.state so we don't have to write it out each time
    const powerPuff = { ...this.state };

    // in this if statement we check to see if the player lost, log their loss, and clear the guesses array & score
    if (powerPuff.guesses.includes(questionId)) {
      console.log("You lose");
      powerPuff.losses = powerPuff.losses + 1;
      powerPuff.guesses = [];
      powerPuff.score = 0
    }

    if ("button.true") {
      powerPuff.score = powerPuff.score + 1;
    }
    // if they didn't lose, we increment their score and add the character to the guesses array
    // else
    // { powerPuff.score = powerPuff.score +1;
    //   powerPuff.guesses.push(questionId)
    // }
    // here we shuffle the character cards again
    this.shuffle(questions);

    // we check the current score against the high score, increasing high score if it is lower than current score.
    if (powerPuff.score > powerPuff.highScore) {
      powerPuff.highScore = powerPuff.score
    }

    // finally we use setState to update the state to the virtual DOM
    this.setState(powerPuff);
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
              filterFalse={this.filterFalse}

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
            />
          ))}
          <button className="submitFinal">Submit Answers</button>

        </Wrapper>
      </div>
    );
  }
}

export default Quiz;
