import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skill from './Skill';
import { SectionHeader, Icon } from '../Styles';

const Container = styled.div`
  grid-area: skills;
  ul {
    padding: 0;
  }
`;

const SkillList = ({ skills }) => (
  <Container>
    <SectionHeader>
      <Icon className="fa fa-code" />
      Skills
    </SectionHeader>
    <ul>
      {skills.map(val => (<Skill key={val.name} name={val.name} percent={val.percent} />))}
    </ul>
  </Container>
);

SkillList.propTypes = {
  skills: PropTypes
    .arrayOf(PropTypes.shape({ name: PropTypes.string, percent: PropTypes.number })).isRequired,
};

export default SkillList;
