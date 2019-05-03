import React from 'react';
import PropTypes from 'prop-types';

function AnswerOptions(props) {
    return (
        <li className="answerOption">
            <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label classname="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

AnswerOptions.propTypes + {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.func.isRequired
};

export default AnswerOptions;