import React from 'react';

const Experience = () => (
  <div className="experience">
    <div className="section-header">
      <i className="icon fa fa-suitcase" />
      Work Experience
    </div>
    <article>
      <h5>April 2016 - Present</h5>
      <strong>Systena America Inc. San Mateo, CA <em>- Jr. Developer</em></strong>
      <ul>
        <li>Worked as a Japanese-English Translator for technical documents to be read by Japanese team member.</li>
        <li>Worked as a Japanese-English Interpreter to help Japanese team member communicate with American customers.</li>
        <li>Using React.js, I have created various reusable components for web applications for IoT web applications to display at Expos.</li>
        <li>Using Node.js and MySQL, I have created a back-end system that takes various data from sensors and display them as a graph on dashboards.</li>
      </ul>
    </article>
    <article>
      <h5>April 2014 - April 2016</h5>
      <strong>Systena America Inc. San Mateo, CA <em>- QA Engineer</em></strong>
      <ul>
        <li>Performed quality assurance test on Android mobile phones and fiercely checked for UI/UX issues with preloaded applications.</li>
      </ul>
    </article>
  </div>
);

export default Experience;
