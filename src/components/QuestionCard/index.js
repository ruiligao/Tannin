import React from "react";
import "./style.css";


function QuestionCard(props) {
    return (
        <div className="card">
        <h2 className="questionName">{props.question}{props.name}?</h2>
        <h3 className="answers">{props.answers}</h3>
        </div>
    );
}

export default QuestionCard;