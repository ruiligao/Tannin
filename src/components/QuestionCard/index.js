import React from "react";
import "./style.css";


// function QuestionCard(props) {
    class QuestionCard extends React.Component{

    answers  = this.props.answers;

    fakeVar = this.answers ? this.answers.splice(this.answers.indexOf(this.props[this.props.category]),1): null
    shuffledAnswers = this.answers ? this.props.shuffle(this.answers):null
    render(){
    return (
        <div className="qcard">
        
        <h2 className="questionName">{this.props.question}{this.props.wineName}?</h2>
                {/* If false answers are available, render button for each answer, else render a submit (specifically for the flavors question) */}
                    {this.answers ? this.props.answers.slice(0,3).map(answer => { 
                        return (
                        <div>
                            <button className={this.props.id} onClick = {(event) => {
                               console.log(event.target.value) 
                               
                            }} value="0">{ answer }</button><br/>
                        </div>
                        )
                    }) : <div>
                        {/* on change! in input tag */}
                            <input  value={this.props.submitFlavor}></input>
                            <button onClick={this.props.handleCheckAnswer} className="submitAnswer">Submit</button>
                        </div>
                    }

                    {this.answers ? <button className={this.props.id} value="1">{this.props[`${this.props.category}`]}</button> : null}
        </div>
    );
                }
}

export default QuestionCard;