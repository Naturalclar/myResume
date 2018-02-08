import React from 'react';
import { Article, SectionHeader } from '../Styles';
import { createHtml } from '../Utils';
import education from './education.md';

const Education = () => (
  <div className="education">
    <SectionHeader>
      <i className="icon fa fa-graduation-cap" />
      Education
    </SectionHeader>
    <Article dangerouslySetInnerHTML={createHtml(education)} />
  </div>
);

export default Education;

