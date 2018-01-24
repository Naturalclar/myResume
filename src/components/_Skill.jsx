import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ name, percent }) => {
  const max = 220;
  const min = 100;
  const level = (min + ((max - min) * (percent / 100))).toFixed();
  return (
    <svg width="300" height="32" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <text x="10" y="50%" alignmentBaseline="middle">{name}</text>
      <line x1="100px" x2={`${max}px`} y1="50%" y2="50%" className="skills-line" />
      <line x1="100px" x2={`${level}px`} y1="50%" y2="50%" className="skills-progress" />
    </svg>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Skill;
