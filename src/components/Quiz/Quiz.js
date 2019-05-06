import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/Quiz';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {
    return (
        <div className="quiz">
            <QuestionCount
                counter={props.questionId}
                total={props.questionTotal}
             />
             <Question content={props.question} />
             <ul className="answerOptions">
             {props.answerOptions.map(renderAnswersOptions)}
             </ul>   
        </div>
    );
    }
Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    
}