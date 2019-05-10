import React from "react";
import "./style.css";


// function QuestionCard(props) {
class QuestionCard extends React.Component {


    fakeVar = this.answers ? this.answers.splice(this.answers.indexOf(this.props[this.props.category]),1): null
    shuffledAnswers = this.answers ? this.props.shuffle(this.answers):null
    render(){
    return (
        <div className="qcard">
        
        <h2 className="questionName">{this.props.question}{this.props.wineName}?</h2>
                {/* If false answers are available, render button for each answer, else render a submit (specifically for the flavors question) */}
                <div>
                    {this.answers ? this.props.answers.slice(0, 3).map(answer => {
                        return (
                            <div>
                                <button className={this.props.id} onClick={this.props.handleBtnClick}
                                    value="0">{answer}</button><br />
                            </div>
                        )
                    }) :
                        <div className="AnswerButtons">
                            {/* on change! in input tag */}
                            <input
                                onChange={this.props.handleInputChange}
                                value={this.props.submittedFlavor}
                                name="submittedFlavor"
                                type="text"
                                placeholder="Only submit one flavor" 
                            />
                            <button 
                                className="submitAnswer" 
                                onClick={this.props.handleCheckFlavor}>
                                Submit
                            </button>
                        </div>
                    }

                    <div>
                        {this.answers ? <button className={this.props.id} onClick={this.props.handleBtnClick} value="1">{this.props[`${this.props.category}`]}</button> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionCard;