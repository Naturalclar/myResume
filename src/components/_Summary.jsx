import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({content}) => (
  <article className="summary">
    <div className="section-header">
      <i className="icon fa fa-user" />
      Summary
    </div>
    <p>
      {content}
    </p>
  </article>
);

Summary.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Summary;
