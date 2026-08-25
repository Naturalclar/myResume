import type { FC } from 'react'
import styled from 'styled-components'
import Skill from './Skill'
import { SectionHeader } from '../Styles'
import { Icon } from '../Icon'

const Container = styled.div`
  grid-area: skills;
  ul {
    padding: 0;
  }
`

type Skill = {
  name: string
  percent: number
}

type Props = {
  skills: Skill[]
}

const SkillList: FC<Props> = ({ skills }) => (
  <Container>
    <SectionHeader>
      <Icon name="code" />
      Skills
    </SectionHeader>
    <ul>
      {skills.map((val) => (
        <Skill key={val.name} name={val.name} percent={val.percent} />
      ))}
    </ul>
  </Container>
)

export default SkillList
