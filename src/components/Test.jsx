import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Baoquestion from '../components/Baoquestion';
import Baoscore from '../components/Baoscore';
import answerchoices from '../components/answerchoices';



function Test(props) {
    return (
       <div className="test">
         {/*<QuestionCount
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Question content={props.question} />*/}
         <ul className="answerchoices">
           <h1>Look at you.. :)</h1>
         </ul>
       </div>
    );
  }

  Test.propTypes = {
    answer: PropTypes.string,
    answerChoices: PropTypes.array,
    counter: PropTypes.number,
    question: PropTypes.string,
    questionId: PropTypes.number,
    questionTotal: PropTypes.number,
    onAnswerSelected: PropTypes.func
  };

  export default Test;