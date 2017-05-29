import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

function Score(props) {

  return (
    <div>
    <CSSTransitionGroup 
      className="container result"
      transitionName="test"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
    >
      <div key="transition-group-content">
        You prefer <strong>{props.testScore}</strong>!
      </div>
    </CSSTransitionGroup>
    </div>
  );

}

Score.propTypes = {
  quizResult: PropTypes.string,
};

export default Score;