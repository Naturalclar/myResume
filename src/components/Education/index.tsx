import React from 'react'
import styled from 'styled-components'
import { Article, SectionHeader, Icon } from '../Styles'
import EducationMd from './education.md'

const Container = styled.div`
  grid-area: education;
`

const Education = () => (
  <Container>
    <SectionHeader>
      <Icon className="fa fa-graduation-cap" />
      Education
    </SectionHeader>
    <Article>
      <EducationMd />
    </Article>
  </Container>
)

export default Education
