import styled from 'styled-components'
import { Article, SectionHeader } from '../Styles'
import { Icon } from '../Icon'
import EducationMd from './education.md'

const Container = styled.div`
  grid-area: education;
`

const Education = () => (
  <Container>
    <SectionHeader>
      <Icon name="graduation-cap" />
      Education
    </SectionHeader>
    <Article>
      <EducationMd />
    </Article>
  </Container>
)

export default Education
