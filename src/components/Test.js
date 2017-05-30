import React from 'react';
import Baoquestion from '../components/Baoquestion';
import Baoscore from '../components/Baoscore';
import AnswerChoices from '../components/answerchoices';
import PropTypes from 'prop-types';

function Test(props){

  function getAnswer(key) {
    return (
      <AnswerChoices
      key={key.content}
      questionId={props.questionId}
      onAnswerSelected={props.onAnswerSelected}
      answer={props.answer}
      answerOptions={key.content}
      />
    )};

    return (
       <div className="test">
         <Baoscore
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Baoquestion content={props.question} />
         <ul className="answerchoices">
         {props.answerchoices.map(getAnswer)}
         </ul>
       </div>
    );
  }

  Test.propTypes = {
    answer: PropTypes.string,
    AnswerChoices: PropTypes.array,
    counter: PropTypes.number,
    question: PropTypes.string,
    questionId: PropTypes.number,
    questionTotal: PropTypes.number,
    onAnswerSelected: PropTypes.func,
  };

  export default Test;