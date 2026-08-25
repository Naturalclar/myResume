import styled from 'styled-components'
import { Article, SectionHeader } from '../Styles'
import { Icon } from '../Icon'
import Experience1 from './cureapp-full-stack-engineer.md'
import Experience2 from './sai-jr-developer.md'

const Container = styled.div`
  grid-area: experience;
`

const Experience = () => (
  <Container>
    <SectionHeader>
      <Icon name="suitcase" />
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
