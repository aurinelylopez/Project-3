import React, { Component } from 'react';
import PropTypes from 'prop-types';


  function Baoquestion(props) {
    return (
      <h2 className="Baoquestion">{props.content}</h2>
      // <h2 className="Baoquestion">{props.baoQuestion}</h2>
    );
  }

  Baoquestion.propTypes = {
    content: PropTypes.string
  };

  // Baoquestion.propTypes = {
  //   content: React.PropTypes.string.isRequired
  // };

  export default Baoquestion;