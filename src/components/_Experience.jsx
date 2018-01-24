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
        <li>Using React.js, I have created various reusable components for web applications for IoT web applications to display at Expos.</li>
        <li>Using Express.js, I have created various REST APIs and routing for web applications hosted on AWS for internal use.</li>
        <li>Using Riot.js and Bootstrap, designed and hosted our company website on AWS to generate more customer traction.</li>
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
