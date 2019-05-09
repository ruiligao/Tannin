import React from "react";
import "./style.css";


function QuestionCard(props) {
    let { answers } = props;

    let fakeVar = answers ? answers.splice(answers.indexOf(props[props.category]),1): null
    let shuffledAnswers = answers ? props.shuffle(answers):null
    return (
        <div className="card">
        <h2 className="questionName">{props.question}{props.wineName}?</h2>
                {/* If false answers are available, render button for each answer, else render a submit (specifically for the flavors question) */}
                    {answers ? answers.slice(0,3).map(answer => { 
                        return (
                        <div>
                            <button className="false">{ answer }</button><br/>
                        </div>
                        )
                    }) : <div>
                            <input></input>
                            <button className="submitAnswer">Submit</button>
                        </div>
                    }

                    {answers ? <button className="true">{props[`${props.category}`]}</button> : null}
        </div>
    );
}

export default QuestionCard;