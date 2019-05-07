import React from "react";
import "./style.css";


function QuestionCard(props) {
    const { falseAnswers } = props;
    let shuffledFalse = falseAnswers ? props.shuffle(falseAnswers):null
    return (
        <div className="card">
        <h2 className="questionName">{props.question}{props.wineName}?</h2>
                {/* If false answers are available, render button for each answer, else render a submit (specifically for the flavors question) */}
                    {shuffledFalse ? shuffledFalse.slice(0,3).map(answer => { 
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

                    <button className="true">{props[`${props.category}`]}</button>
        </div>
    );
}

export default QuestionCard;