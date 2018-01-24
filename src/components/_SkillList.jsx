import React from 'react';
import Skill from './_Skill';

const SkillList = () => (
  <div className="skills">
    <div className="section-header">
      <i className="icon fa fa-code" />
      Skills
    </div>
    <ul>
      <Skill name="HTML5" percent={90} />
      <Skill name="CSS3" percent={90} />
      <Skill name="Javascript" percent={80} />
      <Skill name="jQuery" percent={80} />
      <Skill name="React" percent={70} />
      <Skill name="Redux" percent={60} />
      <Skill name="Riot.js" percent={50} />
      <Skill name="Flow.js" percent={30} />
      <Skill name="Node.js" percent={70} />
      <Skill name="Express.js" percent={70} />
      <Skill name="Webpack" percent={80} />
      <Skill name="Gulp" percent={60} />
      <Skill name="Git" percent={90} />
      <Skill name="Python" percent={70} />
      <Skill name="Ruby" percent={40} />
      <Skill name="Rails 5" percent={40} />
    </ul>
  </div>
);

export default SkillList;
