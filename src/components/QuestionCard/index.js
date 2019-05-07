import React from "react";
import "./style.css";


function QuestionCard(props) {
    console.log(props);
    const { answers } = props;
    let shuffledAnswers = answers ? props.shuffle(answers):null
    return (
        <div className="card">
        <h2 className="questionName">{props.question}{props.name}?</h2>
                    {shuffledAnswers ? shuffledAnswers.slice(0,3).map(answer => { 
                     return (<div><button>{ answer }</button><br/></div>)
                    }) : <div><input></input><button>Submit</button></div>}
        </div>
    );
}

export default QuestionCard;