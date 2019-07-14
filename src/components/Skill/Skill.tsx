import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SkillBar, SkillProgress } from '../Styles';

const Text = styled.text`
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;

const Skill = ({ name, percent }) => {
  const max = 220;
  const min = 100;
  const level = (min + ((max - min) * (percent / 100))).toFixed();
  return (
    <svg width="230" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <Text x="10" y="50%" alignmentBaseline="middle">{name}</Text>
      <SkillBar x1="100px" x2={`${max}px`} y1="50%" y2="50%" />
      <SkillProgress x1="100px" x2={`${level}px`} y1="50%" y2="50%" />
    </svg>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Skill;
