import React from 'react';
import styled from 'styled-components';
import education from './education.md';

const createHtml = markdown => ({ __html: markdown });

const Article = styled.article`
  & h5 {
    color: silver;
    margin-bottom: 0;
  }
  & p {
    margin: 12px 0 0 0;
  }
  & strong {
    font-weight: bold;
    margin: 0;
  }
  & em { 
    font-weight: normal;
    font-style: italic;
  }
`;

const Header = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: #4a68ad;
`;

const Education = () => (
  <div className="education">
    <Header>
      <i className="icon fa fa-graduation-cap" />
      Education
    </Header>
    <Article dangerouslySetInnerHTML={createHtml(education)} />
  </div>
);

export default Education;

