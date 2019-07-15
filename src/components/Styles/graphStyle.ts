import styled from 'styled-components'
import { PrimaryColor } from './variables'

export const SkillBar = styled.line`
  stroke-linecap: round;
  stroke: lightgray;
  stroke-width: 14;
`

export const SkillProgress = styled.line`
  stroke-linecap: round;
  stroke: ${PrimaryColor};
  stroke-width: 14;
`
