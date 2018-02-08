import React from 'react';
import styled from 'styled-components';
import { Article, SectionHeader, Icon } from '../Styles';
import { createHtml } from '../Utils';
import education from './education.md';

const Container = styled.div`
grid-area: education;
`;

const Education = () => (
  <Container>
    <SectionHeader>
      <Icon className="fa fa-graduation-cap" />
      Education
    </SectionHeader>
    <Article dangerouslySetInnerHTML={createHtml(education)} />
  </Container>
);

export default Education;

