import React from 'react';
import styled from 'styled-components';
import { Article, SectionHeader, Icon } from '../Styles';
import { createHtml } from '../Utils';
import experience1 from './sai-jr-developer.md';
import experience2 from './sai-qa-analyst.md';

const Container = styled.div`
grid-area: experience;
`;

const Experience = () => (
  <Container>
    <SectionHeader>
      <Icon className="fa fa-suitcase" />
      Work Experience
    </SectionHeader>
    <Article dangerouslySetInnerHTML={createHtml(experience1)} />
    <Article dangerouslySetInnerHTML={createHtml(experience2)} />
  </Container>
);

export default Experience;
