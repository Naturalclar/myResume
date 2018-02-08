import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SectionHeader } from './Styles';


const Summary = ({ content }) => (
  <article className="summary">
    <SectionHeader>
      <i className="icon fa fa-user" />
      Summary
    </SectionHeader>
    <p>
      {content}
    </p>
  </article>
);

Summary.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Summary;
