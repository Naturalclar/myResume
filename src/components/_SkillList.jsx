import React from 'react';
import PropTypes from 'prop-types';
import Skill from './_Skill';

const SkillList = ({ skills }) => (
  <div className="skills">
    <div className="section-header">
      <i className="icon fa fa-code" />
      Skills
    </div>
    <ul>
      {skills.map(val => (<Skill key={val[0]} name={val[0]} percent={val[1]} />))}
    </ul>
  </div>
);

SkillList.propTypes = {
  skills: PropTypes.shape([[PropTypes.string, PropTypes.number]]).isRequired,
};

export default SkillList;
