import React from 'react';
import Baoquestion from '../components/Baoquestion';
import Baoscore from '../components/Baoscore';
import AnswerChoices from '../components/answerchoices';
import PropTypes from 'prop-types';

function Test(props){

  function getAnswer(props) {
    return (
      <AnswerChoices
      questionId={props.questionId}
      onAnswerSelected={props.onAnswerSelected}
      answer={props.answer}
      AnswerChoices={props.content} 
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
           <h1>Look at you.. :)</h1>
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