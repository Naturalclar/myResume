import React from 'react';
import { Article, SectionHeader } from '../Styles';
import { createHtml } from '../Utils';
import experience1 from './sai-jr-developer.md';
import experience2 from './sai-qa-analyst.md';

const Experience = () => (
  <div className="experience">
    <SectionHeader>
      <i className="icon fa fa-suitcase" />
      Work Experience
    </SectionHeader>
    <Article dangerouslySetInnerHTML={createHtml(experience1)} />
    <Article dangerouslySetInnerHTML={createHtml(experience2)} />
  </div>
);

export default Experience;
