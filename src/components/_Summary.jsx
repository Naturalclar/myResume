import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SectionHeader, Icon } from './Styles';


const Summary = ({ content }) => (
  <article className="summary">
    <SectionHeader>
      <Icon className="fa fa-user" />
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
