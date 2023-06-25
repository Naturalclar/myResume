import React from 'react'
import styled from 'styled-components'
import { Article, SectionHeader, Icon } from '../Styles'
import Experience1 from './cureapp-full-stack-engineer.md'
import Experience2 from './sai-jr-developer.md'

const Container = styled.div`
  grid-area: experience;
`

const Experience = () => (
  <Container>
    <SectionHeader>
      <Icon className="fa fa-suitcase" />
      Work Experience
    </SectionHeader>
    <Article>
      <Experience1 />
    </Article>
    <Article>
      <Experience2 />
    </Article>
  </Container>
)

export default Experience
