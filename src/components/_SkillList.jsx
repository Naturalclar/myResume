import React from 'react';
import PropTypes from 'prop-types';
import Skill from './_Skill';
import { SectionHeader, Icon } from './Styles';

const SkillList = ({ skills }) => (
  <div className="skills">
    <SectionHeader>
      <Icon className="fa fa-code" />
      Skills
    </SectionHeader>
    <ul>
      {skills.map(val => (<Skill key={val[0]} name={val[0]} percent={val[1]} />))}
    </ul>
  </div>
);

SkillList.propTypes = {
  skills: PropTypes.shape([[PropTypes.string, PropTypes.number]]).isRequired,
};

export default SkillList;
