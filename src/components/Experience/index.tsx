import React from 'react'
import styled from 'styled-components'
import { Article, SectionHeader, Icon } from '../Styles'
import { createHtml } from '../Utils'
import experience1 from './cureapp-full-stack-engineer.md'
import experience2 from './sai-jr-developer.md'

const Container = styled.div`
  grid-area: experience;
`

const Experience = () => (
  <Container>
    <SectionHeader>
      <Icon className="fa fa-suitcase" />
      Work Experience
    </SectionHeader>
    <Article dangerouslySetInnerHTML={createHtml(experience1)} />
    <Article dangerouslySetInnerHTML={createHtml(experience2)} />
  </Container>
)

export default Experience
